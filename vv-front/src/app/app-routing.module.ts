import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './core/authentication/template/login.component';
import { IndexComponent } from './modules/index/template/index.component';

// Guards
import { AuthGuard } from './core/guards/auth-guard';
import { PessoaResolver } from './core/guards/pessoa-resolver';

// Cadastrar Nova Pessoa
import { CadastroComponent } from './modules/pessoa/cadastro/cadastro.component';

const routes: Routes = [
  { // Caso vazio, vai para o index
    path: '', pathMatch: 'full', redirectTo: 'index'
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'administrativo',
    loadChildren: () => import('./modules/administrativo/administrativo.module').then(m => m.AdministrativoModule),
    canActivate: [AuthGuard],
    resolve: { pessoa: PessoaResolver }
  },
  {
    path: 'novaPessoa', component: CadastroComponent
  },
  { path: 'associacao', loadChildren: () => import('./modules/associacao/associacao.module').then(m => m.AssociacaoModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
