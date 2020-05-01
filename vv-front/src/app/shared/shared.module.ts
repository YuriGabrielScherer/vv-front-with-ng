import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Tirar daqui
import { TextMaskModule } from 'angular2-text-mask';

// Components
import { CampoControlErroComponent } from './mensagens-formulario/campo-control-erro/campo-control-erro.component';

// Pipes
import { MascaraCpfPipe } from './pipes/mascara-cpf.pipe';
import { PrimeiroNomePipe } from './pipes/primeiro-nome.pipe';
import { CorFaixaPipe } from './pipes/cor-faixa.pipe';
import { SexoPipe } from './pipes/sexo.pipe';
import { MascaraTelefonePipe } from './pipes/mascara-telefone.pipe';

@NgModule({
  declarations: [
    CampoControlErroComponent,

    // Pipes
    MascaraCpfPipe,
    PrimeiroNomePipe,
    MascaraTelefonePipe,
    CorFaixaPipe,
    SexoPipe
  ],
  imports: [
    CommonModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  exports: [
    CampoControlErroComponent,

    // Pipes
    MascaraCpfPipe,
    MascaraTelefonePipe,
    PrimeiroNomePipe,
    CorFaixaPipe,
    SexoPipe,

    TextMaskModule
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule { }
