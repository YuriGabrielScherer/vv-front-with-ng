import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociacaoRoutingModule } from './associacao-routing.module';
import { AssociacaoComponent } from './template/associacao.component';
import { AssociacaoService } from './associacao.service';

@NgModule({
  declarations: [
    AssociacaoComponent
  ],
  imports: [
    CommonModule,
    AssociacaoRoutingModule
  ],
  providers: [
    AssociacaoService
  ]
})
export class AssociacaoModule { }
