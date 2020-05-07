import { AtletaService } from './../atleta.service';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { Routes, RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Navigation, ActivatedRoute } from '@angular/router';
import { NgModule, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MessageService } from 'primeng/api';
import { AtletaFormComponent } from './atleta-form/atleta-form.component';

import { ConfirmacaoPessoaComponent } from './confirmacao-pessoa/confirmacao-pessoa.component';

@Injectable()
export class AtletaCadastroGuard implements CanActivate {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private atletaService: AtletaService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const navigation = this.router.getCurrentNavigation();

    if (this.atletaService.getPessoaContext() === null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cadastro de Atletas',
        detail: 'Você precisa selecionar uma pessoa antes de continuar.',
      });

      this.router.navigate(['/administrativo/atleta/cadastrar/pessoa']);
      return false;
    }

    return true;
  }
}

@Injectable()
export class ConfirmacaoCadastroGuard implements CanActivate {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private atletaService: AtletaService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.atletaService.getPessoaContext() === null || this.atletaService.getAtletaContext() === null) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cadastro de Atletas',
        detail: 'Você precisa selecionar uma atleta antes de continuar.',
      });

      this.router.navigate(['/administrativo/atleta/cadastrar/atleta']);
      return false;
    }

    return true;
  }
}

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'pessoa'
  },
  {
    path: 'pessoa',
    component: ConfirmacaoPessoaComponent,
  },
  {
    path: 'atleta',
    component: AtletaFormComponent,
    canActivate: [AtletaCadastroGuard]
  },
  {
    path: 'confirmacao',
    component: ConfirmacaoCadastroComponent,
    canActivate: [ConfirmacaoCadastroGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AtletaCadastroGuard,
    ConfirmacaoCadastroGuard
  ]
})
export class AtletaCadastroRoutingModule { }
