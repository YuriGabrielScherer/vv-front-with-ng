import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociacaoComponent } from './template/associacao.component';

const routes: Routes = [
  { path: '', component: AssociacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociacaoRoutingModule { }
