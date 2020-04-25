import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AtletaService } from '../../atleta.service';

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

  // Titulo da pagina
  titulo = 'Primeiro, escolha uma pessoa para continuar';

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
        command: () => {
          this.titulo = 'Primeiro, escolha uma pessoa para continuar';
        }
      },
      {
        label: 'Atleta',
        command: () => {
          if (this.atletaService.getPessoaContext() != null) {
            this.router.navigate(['/administrativo/atleta/cadastrar/atleta']);
            this.titulo = 'Entre com os dados do Atleta';
          } else {
            this.addSingle();
          }
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

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}


}
