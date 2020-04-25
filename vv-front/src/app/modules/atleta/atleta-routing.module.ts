import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { AtletaComponent } from './atleta-cadastro/template/atleta.component';
import { AtletaFuncoesComponent } from './atleta-funcoes/atleta-funcoes.component';

const routes: Routes = [
  {
    path: '',
    component: AtletaComponent
  },
  {
    path: 'cadastrar',
    component: AtletaComponent,
    loadChildren: () => import('../atleta/atleta-cadastro/atleta-cadastro.module').then(m => m.AtletaCadastroModule),
  },
  {
    path: 'funcoes',
    component: AtletaFuncoesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtletaRoutingModule { }
