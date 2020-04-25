import { AtletaService } from './../../atleta.service';
import { Component, OnInit } from '@angular/core';

import { MessagesHandlerService } from './../../../../core/service/messages/messages-handler.service';

import { Pessoa } from './../../../pessoa/pessoa';

@Component({
  selector: 'app-confirmacao-pessoa',
  templateUrl: './confirmacao-pessoa.component.html',
  styleUrls: ['./confirmacao-pessoa.component.scss']
})
export class ConfirmacaoPessoaComponent implements OnInit {

  tituloCard = 'a';

  pessoas: Pessoa[];
  pessoaSelecionada: Pessoa;

  constructor(
    private atletaService: AtletaService,
    private messageHandler: MessagesHandlerService
  ) { }

  ngOnInit(): void {
    this.createListaPessoas();
  }

  alterarPessoa() {
    console.log('Alterar pessoa selecionada -> ', this.pessoaSelecionada);
  }

  selecionouPessoa(): void {
    // Setando pessoa no contexto do cadastro
    this.atletaService.setPessoaContext(this.pessoaSelecionada);

    // Personalizando Card
    this.tituloCard = 'Dados';
    if (this.pessoaSelecionada.sexo === 'F') {
      this.tituloCard = `${this.tituloCard} da`;
    } else {
      this.tituloCard = `${this.tituloCard} do`;
    }
    this.tituloCard = `${this.tituloCard} ${this.pessoaSelecionada.nome.split(' ', 1)}`;
  }

  private createListaPessoas(): void {
    this.atletaService.getPessoasCadastroAtleta().subscribe((atletas: Pessoa[]) => {
      this.pessoas = atletas;
    }, (error) => {
      this.messageHandler.errorMessageHandler(error);
    });
  }

}
