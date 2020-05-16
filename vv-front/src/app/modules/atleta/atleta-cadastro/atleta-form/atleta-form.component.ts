import { ValidacoesFormService } from './../../../../core/service/form/validacoes-form.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from './../../../../shared/model/pessoa';
import { Atleta } from './../../../../shared/model/atleta';
import { AtletaService } from './../../atleta.service';

@Component({
  selector: 'app-atleta-form',
  templateUrl: './atleta-form.component.html',
  styleUrls: ['./atleta-form.component.scss']
})
export class AtletaFormComponent implements OnInit {

  pessoaSelecionada: Pessoa = new Pessoa();

  graduacoes: any[];
  associacoes: Array<any> = Array();

  formulario: FormGroup;

  private atleta: Atleta = null;

  constructor(
    private formBuilder: FormBuilder,
    private atletaService: AtletaService,
    private validacaoForm: ValidacoesFormService
  ) {
    this.popularAssociacao();

    this.pessoaSelecionada = this.atletaService.getPessoaContext();
    if (this.atletaService.getAtletaContext() !== null) {
      this.atleta = this.atletaService.getAtletaContext();
    }

    this.criarFormulario();
  }

  ngOnInit(): void {
    this.popularGraduacao();
    this.validacaoFormulario();
  }

  //
  // Metodos Publicos
  //

  teste() {
    console.log(this.formulario);
  }


  //
  // Metodos Privados
  //

  private popularGraduacao() {
    this.graduacoes = [
      { label: 'Branca', value: 1 },
      { label: 'Amarela', value: 2 },
      { label: 'Vermelha', value: 3 },
      { label: 'Laranja', value: 4 },
      { label: 'Verde', value: 5 },
      { label: 'Roxa', value: 6 },
      { label: 'Marrom', value: 7 },
      { label: 'Preta', value: 8 },
    ];
  }

  private popularAssociacao() {
    this.atletaService.getAssociacoes()
      .pipe(
        finalize(() => {
          this.preencherFormulario();
        })
      )
      .subscribe((response: any) => {
        response.associacoes.forEach((associacao: any) => {
          associacao.label = `Código - ${associacao.nome}`;
          associacao.value = associacao;
          this.associacoes.push(associacao);
        });
      });
  }

  private criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [this.pessoaSelecionada.nome],
      cpf: [this.pessoaSelecionada.cpf],
      endereco: [undefined, Validators.compose([Validators.maxLength(30)])],
      faixa: [1, Validators.compose([Validators.required])],
      federacao: [undefined, Validators.compose([Validators.maxLength(5)])],
      confederacao: [undefined, Validators.compose([Validators.maxLength(5)])],
      nomeResponsavel: [undefined, Validators.compose([Validators.required, Validators.maxLength(100)])],
      cpfResponsavel: [undefined, Validators.compose([Validators.required, Validators.maxLength(14), this.validacaoForm.isValidCpf()])],
      telefoneResponsavel: [undefined, Validators.compose([Validators.required,
        Validators.maxLength(15), this.validacaoForm.isValidPhone()])],
      associacao: [this.associacoes[0], Validators.compose([Validators.required])]
    });

    setTimeout(() => {
      this.formulario.get('cpf').setValue(this.pessoaSelecionada.cpf);
      this.formulario.get('cpf').markAsDirty();
      this.formulario.get('nome').markAsDirty();

    }, 200);
  }

  private validacaoFormulario() {
    this.formulario.statusChanges.subscribe((formValid) => {
      if (formValid === 'VALID') {
        this.atletaService.setAtletaContext(this.prepareValues());
      }
    });
  }

  private prepareValues() {
    const payload: Atleta = new Atleta();
    payload.nomeResponsavel = this.formulario.get('nomeResponsavel').value;
    payload.cpfResponsavel = this.formulario.get('cpfResponsavel').value;
    payload.telefoneResponsavel = this.formulario.get('telefoneResponsavel').value;
    payload.endereco = this.formulario.get('endereco').value;
    payload.confederacao = this.formulario.get('confederacao').value;
    payload.federacao = this.formulario.get('federacao').value;
    payload.grau = this.formulario.get('faixa').value;
    payload.associacao = this.formulario.get('associacao').value;

    return payload;
  }

  private preencherFormulario() {
    if (this.atleta == null) {
      this.formulario.get('associacao').setValue(this.associacoes[0]);
      return;
    }

    this.formulario.patchValue({
      nomeResponsavel: this.atleta.nomeResponsavel,
      cpfResponsavel: this.atleta.cpfResponsavel,
      telefoneResponsavel: this.atleta.telefoneResponsavel,
      endereco: this.atleta.endereco,
      confederacao: this.atleta.confederacao,
      federacao: this.atleta.federacao,
      grau: this.atleta.grau,
      associacao: this.atleta.associacao,
    });
  }

}
