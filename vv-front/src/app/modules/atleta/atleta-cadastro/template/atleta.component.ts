import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private pessoaSelecionada: Pessoa;
  private atleta: Atleta;

  constructor(
    private router: Router,
    private atletaService: AtletaService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.criarSteps();

    this.atletaService.getPessoaContext()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((pessoa: Pessoa) => {
        this.pessoaSelecionada = pessoa;
      });

    this.atletaService.getAtletaContext()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((atleta: Atleta) => {
        this.atleta = atleta;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
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
    console.log(this.route);
    switch (rota) {
      case 'atleta': {
        if (this.pessoaSelecionada != null) {
          this.router.navigate(
            ['/administrativo/atleta/cadastrar/atleta'],
            { state: { pessoa: this.pessoaSelecionada } }
          );
        } else {
          this.toastErroMudarStep('Por favor, selecione uma pessoa antes de continuar.');
        }
        break;
      }
      case 'confirmacao': {
        if (this.pessoaSelecionada != null && this.atleta != null) {
          this.router.navigate(
            ['/administrativo/atleta/cadastrar/confirmacao'],
            { state: { atleta: this.atleta } }
          );
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
