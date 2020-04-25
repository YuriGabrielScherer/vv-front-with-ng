import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Atleta } from '../../../../shared/model/atleta';
import { Pessoa } from '../../../pessoa/pessoa';
import { PessoaService } from '../../../pessoa/pessoa.service';
import { ToastService } from '../../../../core/service/toast/toast.service';
import { AtletaService } from '../../atleta.service';
import { ValidacoesFormService } from '../../../../core/service/form/validacoes-form.service';

@Component({
  selector: 'app-atleta',
  templateUrl: './atleta.component.html',
  styleUrls: ['./atleta.component.scss'],
  preserveWhitespaces: true
})
export class AtletaComponent implements OnInit {

  steps: MenuItem[];

  // Titulo da pagina
  titulo = 'Primeiro, escolha uma pessoa para continuar';

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.criarSteps();
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
        routerLink: ['/administrativo/atleta/cadastrar/atleta'],
        command: () => {
          this.titulo = 'Entre com os dados do Atleta';
        }
      },
      {
        label: 'Confirmação',
        routerLink: ['/administrativo/atleta/cadastrar/confirmacao'],
        command: () => {
          this.titulo = 'Confirme os dados para cadastro';
        }
      }
    ];
  }


}
