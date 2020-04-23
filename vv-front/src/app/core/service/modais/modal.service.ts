import { Injectable } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from './confirm-modal/template/confirm-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  // Show Confirm Modal
  showConfirmModal(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.mensagem = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (bsModalRef.content as ConfirmModalComponent).respostaModal;
  }

}
