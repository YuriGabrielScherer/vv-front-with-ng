import { TipoOrdenacao } from './../../shared/pageable/TipoOrdenacao.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { CrudService } from '../../core/http/crud-service';
import { PessoaService } from './../pessoa/pessoa.service';
import { PaginacaoResolverService } from './../../shared/pageable/paginacaoResolver.service';
import { AssociacaoService } from './../associacao/associacao.service';

import { Atleta } from './../../shared/model/atleta';
import { Pessoa } from '../../shared/model/pessoa';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService extends CrudService<Atleta> {

  private pessoaContext: Pessoa = null;
  private atletaContext: Atleta = null;

  constructor(
    protected http: HttpClient,
    private pessoaService: PessoaService,
    private associacaoService: AssociacaoService,
    private paginacaoResolver: PaginacaoResolverService
  ) {

    // Construtor do CrudService
    super(http, `${environment.API}atleta`);
  }

  getDados(){
    return this.http.get('/assets/data/data.json').pipe(take(1));
  }

  getPessoasCadastroAtleta() {
    return this.pessoaService.retornarPessoasCadastroAtleta();
  }

  setPessoaContext(payload: Pessoa) {
    this.pessoaContext = payload;
  }

  getPessoaContext(): Pessoa {
    return this.pessoaContext;
  }

  setAtletaContext(payload: Atleta) {
    this.atletaContext = payload;
  }

  getAtletaContext(): Atleta {
    return this.atletaContext;
  }

  getAssociacoes(paginacao?: any) {
    const filtro = {
      filtro: '',
      paginacao: this.paginacaoResolver.paginacaoResolver(TipoOrdenacao.CRESCENTE, 0, 10)
    };
    return this.associacaoService.getAll(filtro);
  }
}
