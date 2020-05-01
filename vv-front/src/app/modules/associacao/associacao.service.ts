import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Associacao } from './../../shared/model/Associacao';
import { CrudService } from './../../core/http/crud-service';

@Injectable()
export class AssociacaoService extends CrudService<Associacao>{

  constructor(
    protected http: HttpClient,
  ) {

    super(http, `${environment.API}associacao`);
  }

}
