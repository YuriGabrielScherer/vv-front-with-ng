import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from './components/ngPrime/ngprime.module';
import { AuthInterceptor } from './core/interceptors/interceptor-auth.service';
import { PessoaResolver } from './core/guards/pessoa-resolver';

import { IndexComponent } from './modules/index/template/index.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/authentication/template/login.component';

import { AdministrativoModule } from './modules/administrativo/administrativo.module';
import { PessoaModule } from './modules/pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';

import { AuthGuard } from './core/guards/auth-guard';
import { AuthService } from './core/authentication/auth.service';

import { TextMaskModule } from 'angular2-text-mask';

// NGX Bootrstrap
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdministrativoModule,
    BrowserAnimationsModule,
    PessoaModule,
    SharedModule,
    ReactiveFormsModule,
    TextMaskModule,

    // PrimeNG
    NgPrimeModule,

    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot(
      // Configuracoes globais do Toast
      {
        timeOut: 5000,
        progressBar: true,
        closeButton: true
      }
    )
  ],
  providers: [
    AuthService,
    AuthGuard,
    PessoaResolver,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
