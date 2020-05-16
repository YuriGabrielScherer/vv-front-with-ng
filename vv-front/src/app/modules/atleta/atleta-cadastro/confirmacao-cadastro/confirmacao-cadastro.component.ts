import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from './../../../../shared/model/pessoa';
import { Atleta } from './../../../../shared/model/atleta';

import { AtletaService } from './../../atleta.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmacao-cadastro',
  templateUrl: './confirmacao-cadastro.component.html',
  styleUrls: ['./confirmacao-cadastro.component.scss']
})
export class ConfirmacaoCadastroComponent implements OnInit {

  pessoaSelecionada: Pessoa;
  atletaSelecionado: Atleta;
  constructor(
    private atletaService: AtletaService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.pessoaSelecionada = atletaService.getPessoaContext();
    this.atletaSelecionado = atletaService.getAtletaContext();
  }

  ngOnInit(): void {
  }

  //
  // Metodos publicos
  //

  confirmarDados() {
    this.onSaveAtleta();
  }

  cancelarOperacao() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja cancelar o cadastro de atleta?',
      accept: () => {
        this.onCancelaOperacao();
      }
    });
  }

  //
  // Metodos privados
  //

  private onCancelaOperacao() {
    this.atletaService.setPessoaContext(null);
    this.atletaService.setAtletaContext(null);

    this.router.navigateByUrl('/administrativo/atleta/cadastro/1');
  }

  private criarPayload(): any {

    // Tratando o CPF - Retirando a mascara
    this.atletaSelecionado.cpfResponsavel = this.atletaSelecionado.cpfResponsavel.replace(/[^0-9]+/g, '');

    // Tratando Telefone - Retirando mascara
    this.atletaSelecionado.telefoneResponsavel = this.atletaSelecionado.telefoneResponsavel.replace(/[^0-9]+/g, '');

    // Atleta payload
    const payload = {
      nomeResponsavel: this.atletaSelecionado.nomeResponsavel,
      cpfResponsavel: this.atletaSelecionado.cpfResponsavel,
      telefoneResponsavel: this.atletaSelecionado.telefoneResponsavel,
      endereco: this.atletaSelecionado.endereco,
      grau: this.atletaSelecionado.grau,
      federacao: this.atletaSelecionado.federacao,
      confederacao: this.atletaSelecionado.confederacao,
      idAssociacao: this.atletaSelecionado.associacao.id,
      cpfPessoa: this.pessoaSelecionada.cpf
    };

    return payload;
  }

  private onSaveAtleta() {
    this.atletaService.save(this.criarPayload())
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          detail: 'Atleta cadastrado com sucesso.',
          summary: 'Sucesso!'
        });
      }, () => {});
  }
}
