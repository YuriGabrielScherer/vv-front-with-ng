import { AtletaService } from './../../atleta.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from './../../../../shared/model/pessoa';
import { Router, Navigation } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atleta-form',
  templateUrl: './atleta-form.component.html',
  styleUrls: ['./atleta-form.component.scss']
})
export class AtletaFormComponent implements OnInit {

  pessoaSelecionada: Pessoa = new Pessoa();

  graduacoes: any[];

  formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private atletaService: AtletaService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.pessoaSelecionada = navigation.extras.state.pessoa;

    this.criarFormulario();
  }

  ngOnInit(): void {
    this.popularGraduacao();
    let a;
    this.atletaService.getAssociacoes(a).subscribe((response) => {
      console.log(response);
    });

  }

  //
  // Metodos Publicos
  //

  public onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid === false) {
      this.validateAllForm(this.formulario);
      return;
    }



  }

  public onCancel() {
    this.router.navigate(['/administrativo/atleta/cadastrar/pessoa']);
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

  private criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [this.pessoaSelecionada.nome],
      cpf: [this.pessoaSelecionada.cpf],
      endereco: [undefined, Validators.compose([Validators.required, Validators.maxLength(30)])],
      faixa: [undefined, Validators.compose([Validators.required])],
      cadFck: [undefined, Validators.compose([Validators.required, Validators.maxLength(5)])],
      cadCbk: [undefined, Validators.compose([Validators.required, Validators.maxLength(5)])],
      nomeResponsavel: [undefined, Validators.compose([Validators.required, Validators.maxLength(100)])],
      cpfResponsavel: [undefined, Validators.compose([Validators.required, Validators.maxLength(11)])],
      telefoneResponsavel: [undefined, Validators.compose([Validators.required, Validators.maxLength(14)])],
    });
  }

  private validateAllForm(formGroup: FormGroup) {

  }

}
