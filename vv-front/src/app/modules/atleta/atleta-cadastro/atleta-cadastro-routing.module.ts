import { AtletaFormComponent } from './atleta-form/atleta-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacaoPessoaComponent } from './confirmacao-pessoa/confirmacao-pessoa.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'pessoa'
  },
  {
    path: 'pessoa', component: ConfirmacaoPessoaComponent
  },
  {
    path: 'atleta', component: AtletaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtletaCadastroRoutingModule { }
