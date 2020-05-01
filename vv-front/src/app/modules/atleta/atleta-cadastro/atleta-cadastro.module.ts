import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AtletaCadastroRoutingModule } from './atleta-cadastro-routing.module';
import { NgPrimeModule } from './../../../components/ngPrime/ngprime.module';
import { SharedModule } from './../../../shared/shared.module';

import { ConfirmacaoPessoaComponent } from './confirmacao-pessoa/confirmacao-pessoa.component';
import { AtletaComponent } from './template/atleta.component';

import { AtletaFormComponent } from './atleta-form/atleta-form.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';

@NgModule({
  declarations: [
    AtletaComponent,
    ConfirmacaoPessoaComponent,
    AtletaFormComponent,
    ConfirmacaoCadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgPrimeModule,
    AtletaCadastroRoutingModule,
    SharedModule
  ],
  exports: [
    AtletaComponent,
    ConfirmacaoPessoaComponent
  ]
})
export class AtletaCadastroModule { }
