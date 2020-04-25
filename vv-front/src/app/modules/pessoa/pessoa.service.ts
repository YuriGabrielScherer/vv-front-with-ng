import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { CrudService } from '../../core/http/crud-service';
import { Pessoa } from '../../shared/model/pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<Pessoa> {


  constructor(
    protected http: HttpClient
  ) {

    // Construtor do CrudService
    super(http, `${environment.API}pessoa`);
  }

  //  Retornar o Pessoa usando o e-mail
  loadByEmail(email: string) {

    return this.http.get<Pessoa>(`${environment.API}pessoa/email/${email}`)
      .pipe(
        take(1)
      );
  }

  login(login) {
    return this.http.post(`${environment.API}pessoa/login`, login)
      .pipe(
        take(1)
      );
  }

  loadbyCpf(cpf) {
    return this.http.get<Pessoa>(`${environment.API}pessoa/cpf/${cpf}`)
      .pipe(
        take(1)
      );
  }

  loadByLogin(login: string) {
    return this.http.get<Pessoa>(`${environment.API}pessoa/login/${login}`)
      .pipe(
        take(1)
      );
  }

  delete(cpf: string) {
    return this.http.delete(`${environment.API}pessoa/${cpf}`)
      .pipe(
        take(1)
      );
  }

  retornarPessoasCadastroAtleta() {
    return this.http.get(`${environment.API}pessoa/cadastrarAtleta`)
      .pipe(
        take(1)
      );
  }

}
