import { PaginacaoResolverService } from './../../shared/paginacao/paginacaoResolver.service';
import { TipoOrdenacao } from '../../shared/paginacao/TipoOrdenacao.enum';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Pessoa } from '../pessoa';
import { PessoaService } from './../pessoa.service';

@Injectable()
export class ListarPessoaResolver implements Resolve<Pessoa[]> {

  constructor(
    private pessoaService: PessoaService,
    private paginacaoResolver: PaginacaoResolverService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pessoa[]> | Promise<Pessoa[]> | Pessoa[] {

    const params = {
      filtro: '',
      paginacao: this.paginacaoResolver.paginacaoResolver(TipoOrdenacao.CRESCENTE, 0, 2)
    };
    return this.pessoaService.getAll(params);
  }
}
