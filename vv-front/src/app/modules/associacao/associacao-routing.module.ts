import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';

import { CadastroAssociacaoComponent } from './form/cadastro-associacao.component';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AssociacaoGuard implements CanActivate {
  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro' },
  {
    path:'cadastro',
    component: CadastroAssociacaoComponent,
    canActivate: [AssociacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ],
  providers: [AssociacaoGuard]
})
export class AssociacaoRoutingModule { }
