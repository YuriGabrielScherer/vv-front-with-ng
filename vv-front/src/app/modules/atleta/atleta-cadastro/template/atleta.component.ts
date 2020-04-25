import { Pessoa } from './../../../../shared/model/pessoa';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AtletaService } from '../../atleta.service';

import { MenuItem } from 'primeng/api/menuitem';
import { MessageService } from 'primeng/api';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.scss'],
  preserveWhitespaces: true
})
export class AtletaComponent implements OnInit, OnDestroy {

  steps: MenuItem[];

  // Titulo da pagina
  titulo = 'Primeiro, escolha uma pessoa para continuar';

  private destroy$: Subject<boolean> = new Subject<boolean>();
  pessoaSelecionada: Pessoa;

  constructor(
    private router: Router,
    private atletaService: AtletaService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.criarSteps();

    this.atletaService.getPessoaContext()
      .pipe(
        takeUntil(
          this.destroy$
        )
      )
      .subscribe((pessoa: Pessoa) => {
        this.pessoaSelecionada = pessoa;
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
        command: () => {
          this.titulo = 'Primeiro, escolha uma pessoa para continuar';
        }
      },
      {
        label: 'Atleta',
        command: () => {
          if (this.navegarStep('atleta')) {
            this.titulo = 'Entre com os dados do Atleta';
          }
        }
      },
      {
        label: 'Confirmação',
        command: () => {
          if (this.navegarStep('confirmacao')) {
            this.titulo = 'Confirme os dados para cadastro';
          }
        }
      }
    ];
  }

  private navegarStep(rota: string): boolean {
    if (this.pessoaSelecionada != null) {
      this.router.navigate(
        [`/administrativo/atleta/cadastrar/${rota}`],
        { state: { pessoa: this.pessoaSelecionada } }
      );
      return true;
    }

    this.toastErroMudarStep();
    return false;

  }

  private toastErroMudarStep() {
    this.messageService.add(
      {
        severity: 'warn',
        summary: 'Cadastro de Atletas',
        detail: 'Por favor, selecione uma pessoa antes de continuar.'
      }
    );
  }

  private getPessoaContext() {

  }


}
