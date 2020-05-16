import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AtletaService } from '../../atleta.service';

import { Atleta } from './../../../../shared/model/atleta';
import { Pessoa } from './../../../../shared/model/pessoa';

import { MenuItem } from 'primeng/api/menuitem';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.scss'],
  preserveWhitespaces: true
})
export class AtletaComponent implements OnInit, OnDestroy {

  steps: MenuItem[];

  private pessoa: Pessoa;
  private atleta: Atleta;

  constructor(
    private router: Router,
    private atletaService: AtletaService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.criarSteps();
  }

  ngOnDestroy() {
    this.atletaService.setPessoaContext(null);
  }


  private criarSteps() {
    this.steps = [
      {
        label: 'Pessoa',
        routerLink: ['/administrativo/atleta/cadastrar/1'],
      },
      {
        label: 'Atleta',
        command: () => {
          this.navegarStep('2');
        }
      },
      {
        label: 'Confirmação',
        command: () => {
          this.navegarStep('3');
        }
      }
    ];
  }

  private navegarStep(rota: string) {
    switch (rota) {
      case '2': {
        if (this.atletaService.getPessoaContext() !== null) {
          this.router.navigateByUrl('/administrativo/atleta/cadastrar/2');
        } else {
          this.toastErroMudarStep('Por favor, selecione uma pessoa antes de continuar.');
        }
        break;
      }
      case '3': {
        if (this.atletaService.getAtletaContext() !== null && this.atletaService.getPessoaContext() !== null) {
          this.router.navigateByUrl('/administrativo/atleta/cadastrar/3');
        } else {
          this.toastErroMudarStep('Por favor, selecione um atleta antes de continuar.');
        }
      }
    }

  }

  private toastErroMudarStep(mensagem: string) {
    this.messageService.add(
      {
        severity: 'warn',
        summary: 'Cadastro de Atletas',
        detail: mensagem
      }
    );
  }
}
