import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { AtletaComponent } from './atleta-cadastro/template/atleta.component';
import { AtletaListComponent } from './listar-atleta/listar-atleta.component';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ListarAtletaGuard implements CanActivate {
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}

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
    path: 'listar',
    component: AtletaListComponent,
    canActivate: [ListarAtletaGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ListarAtletaGuard]
})
export class AtletaRoutingModule { }
