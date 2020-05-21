import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociacaoRoutingModule } from './associacao-routing.module';
import { AssociacaoComponent } from './template/associacao.component';
import { AssociacaoService } from './associacao.service';
import { ListComponent } from './list/list.component';
import { NgPrimeModule } from 'src/app/components/ngPrime/ngprime.module';
import { CadastroAssociacaoComponent } from './form/cadastro-associacao.component';
import { AssociacaoFormComponent } from './form/template/associacao-form.component';

@NgModule({
  declarations: [
    AssociacaoComponent,
    ListComponent,
    CadastroAssociacaoComponent,
    AssociacaoFormComponent
  ],
  imports: [
    CommonModule,
    AssociacaoRoutingModule,
    NgPrimeModule
  ],
  providers: [
    AssociacaoService
  ]
})
export class AssociacaoModule { }
