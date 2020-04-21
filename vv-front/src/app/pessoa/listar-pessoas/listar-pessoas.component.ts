import { PaginacaoResolverService } from './../../shared/paginacao/paginacaoResolver.service';
import { PessoaService } from './../pessoa.service';
import { take, finalize, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pessoa } from '../pessoa';
import { TipoOrdenacao } from 'src/app/shared/paginacao/TipoOrdenacao.enum';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss'],
  preserveWhitespaces: true
})
export class ListarPessoasComponent implements OnInit {

  pessoas: Pessoa[];
  loading: boolean;

  // Paginacao
  cols: any[]; // Colunas
  first = 0; // Pagina
  rows = 10; // Registros por pagina
  totalRecords;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private paginacaoService: PaginacaoResolverService
  ) { }

  ngOnInit() {


    this.getValuesFromRouting();
    this.criarTabela();
  }

  getValuesFromRouting() {
    this.loading = true;

    // Pegando valores do Banco de dados
    this.route.data
      .pipe(
        take(1),
        map((dados: any) => {
          return dados.pessoa;
        }),
        finalize(() => this.loading = false)
      ).subscribe(
        (dados) => {
          // Pessoas
          this.pessoas = dados.pessoas;

          // Paginacao
          this.rows = dados.paginacao.numeroRegistroPagina;
          this.first = dados.paginacao.pagina;
          this.totalRecords = dados.paginacao.registrosEncontrados;
        });

  }

  getValuesFromDatabase(event) {
    console.log(event);
    const params = {
      filtro: 'null',
      paginacao: this.paginacaoService.paginacaoResolver(TipoOrdenacao.CRESCENTE, event.page, event.rows)
    };

    this.pessoaService.getAll(params)
      .pipe(
        take(1),
      ).subscribe((dados: any) => {
        console.log('Subscribe -> ', dados);
        this.pessoas = dados.pessoas;

        // Paginacao
        this.rows = dados.paginacao.numeroRegistroPagina;
        this.first = dados.paginacao.pagina;
        this.totalRecords = dados.paginacao.registrosEncontrados;
      });
  }

  criarTabela() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'dataNascimento', header: 'Data Nasc.' },
      { field: 'sexo', header: 'Sexo' },
      { field: 'action', header: 'Ação' }
    ];
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === (this.pessoas.length - this.rows);
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }



}
