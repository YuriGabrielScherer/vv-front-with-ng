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
import { DataNascimentoPipe } from './pipes/data-nascimento.pipe';
import { SexoPipe } from './pipes/sexo.pipe';

@NgModule({
  declarations: [
    CampoControlErroComponent,

    // Pipes
    MascaraCpfPipe,
    PrimeiroNomePipe,
    CorFaixaPipe,
    DataNascimentoPipe,
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
    PrimeiroNomePipe,
    CorFaixaPipe,
    DataNascimentoPipe,
    SexoPipe,

    TextMaskModule
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule { }
