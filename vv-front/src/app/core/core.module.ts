import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Services
import { ValidacoesFormService } from '../core/service/form/validacoes-form.service';
import { ToastService } from './../core/service/toast/toast.service';
import { ConfirmModalService } from './service/modais/confirm-modal/confirm-modal.service';
import { ModalService } from './service/modais/modal.service';

// Components
import { ConfirmModalComponent } from './service/modais/confirm-modal/template/confirm-modal.component';

// Modules
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [],
  providers: [
    ValidacoesFormService,
    ToastService,
    ConfirmModalService,
    ModalService
  ],
  entryComponents: [
    ConfirmModalComponent,
  ]
})
export class CoreModule { }
