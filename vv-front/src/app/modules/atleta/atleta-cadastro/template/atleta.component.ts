import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
export class AtletaComponent implements OnInit {

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


  private criarSteps() {
    this.steps = [
      {
        label: 'Pessoa',
        routerLink: ['/administrativo/atleta/cadastrar/pessoa'],
      },
      {
        label: 'Atleta',
        command: () => {
          this.navegarStep('atleta');
        }
      },
      {
        label: 'Confirmação',
        command: () => {
          this.navegarStep('confirmacao');
        }
      }
    ];
  }

  private navegarStep(rota: string) {
    switch (rota) {
      case 'atleta': {
        if (this.atletaService.getPessoaContext() !== null) {
          console.log('entrei no if');
          this.router.navigateByUrl('/administrativo/atleta/cadastrar/atleta');
        } else {
          this.toastErroMudarStep('Por favor, selecione uma pessoa antes de continuar.');
        }
        break;
      }
      case 'confirmacao': {
        if (this.atletaService.getAtletaContext() !== null && this.atletaService.getPessoaContext() !== null) {
          this.router.navigateByUrl('/administrativo/atleta/cadastrar/confirmacao');
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
