import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { CrudService } from '../../core/http/crud-service';
import { PessoaService } from './../pessoa/pessoa.service';

import { Atleta } from './../../shared/model/atleta';
import { Pessoa } from '../../shared/model/pessoa';
import { Subscriber, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService extends CrudService<Atleta> {

  private behaviosSubject$: BehaviorSubject<Pessoa> = new BehaviorSubject<Pessoa>(null);

  constructor(
    protected http: HttpClient,
    private pessoaService: PessoaService
  ) {

    // Construtor do CrudService
    super(http, `${environment.API}atleta`);
  }

  cadastrarFck() {
    return this.http.get<string>(`${environment.API}fck`)
      .pipe(
        take(1)
      );
  }

  getPessoasCadastroAtleta() {
    return this.pessoaService.retornarPessoasCadastroAtleta();
  }

  setPessoaContext(payload: Pessoa) {
    this.behaviosSubject$.next(payload);
  }

  getPessoaContext(): Observable<Pessoa> {
    return this.behaviosSubject$.asObservable();
  }
}
