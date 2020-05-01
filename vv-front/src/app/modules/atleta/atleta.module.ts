import { AssociacaoService } from './../associacao/associacao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { AtletaRoutingModule } from './atleta-routing.module';
import { AtletaCadastroModule } from './atleta-cadastro/atleta-cadastro.module';
import { NgPrimeModule } from './../../components/ngPrime/ngprime.module';

import { AtletaService } from './atleta.service';
import { PessoaService } from './../pessoa/pessoa.service';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AtletaFuncoesComponent } from './atleta-funcoes/atleta-funcoes.component';


@NgModule({
  declarations: [
    AtletaFuncoesComponent,
  ],
  imports: [
    AtletaCadastroModule,
    CommonModule,
    AtletaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeModule,
    CollapseModule.forRoot()
  ],
  providers: [
    AtletaService,
    PessoaService,
    AssociacaoService
  ]

})
export class AtletaModule { }
