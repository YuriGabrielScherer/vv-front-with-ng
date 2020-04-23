import { take, finalize, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pessoa } from '../pessoa';
import { TipoOrdenacao } from './../../../shared/pageable/TipoOrdenacao.enum';
import { PaginacaoResolverService } from '../../../shared/pageable/paginacaoResolver.service';
import { MessagesHandlerService } from '../../../core/service/messages/messages-handler.service';
import { ToastService } from '../../../core/service/toast/toast.service';
import { PessoaService } from './../pessoa.service';
// NgPrime
import { MenuItem } from 'primeng/api/menuitem';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss'],
  preserveWhitespaces: true
})
export class ListarPessoasComponent implements OnInit {

  pessoas: Pessoa[];
  loading: boolean;

  items: MenuItem[];
  sexos: SelectItem[];

  // Paginacao
  cols: any[]; // Colunas
  first = 0; // Pagina
  rows = 10; // Registros por pagina
  totalRecords;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private paginacaoService: PaginacaoResolverService,
    private toast: ToastService,
    private messageHandler: MessagesHandlerService
  ) { }

  ngOnInit() {
    this.getValuesFromRouting();
    this.criarTabela();
    this.criarMenuAcoes();

    this.sexos = [
      { label: 'Todos os sexos', value: null },
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' }
    ];
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
    this.loading = true;
    const params = {
      filtro: '',
      paginacao: this.paginacaoService.paginacaoResolver(TipoOrdenacao.CRESCENTE, event.page, event.rows)
    };

    this.pessoaService.getAll(params)
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      ).subscribe((dados: any) => {
        // Pessoas
        this.pessoas = dados.pessoas;
        // Paginacao
        this.rows = dados.paginacao.numeroRegistroPagina;
        this.first = dados.paginacao.pagina;
        this.totalRecords = dados.paginacao.registrosEncontrados;
      }, (error) => {
        this.messageHandler.errorMessageHandler(error);
      });
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

  private criarMenuAcoes() {
    this.items = [
      {
        label: 'Atualizar', icon: 'pi pi-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Excluir', icon: 'pi pi-times', command: () => {
          this.delete();
        }
      },
      { separator: true },
      { label: 'Detalhes', icon: 'pi pi-user' }
    ];
  }

  private criarTabela() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'dataNascimento', header: 'Data Nasc.' },
      { field: 'sexo', header: 'Sexo' },
      { field: 'action', header: 'Ação' }
    ];
  }

  private update() {
    this.toast.toastInfo('Atualizado!', 'Atualizado!');
  }

  private delete() {
    this.toast.toastInfo('Excluido!', 'Excluido!');

  }


}
