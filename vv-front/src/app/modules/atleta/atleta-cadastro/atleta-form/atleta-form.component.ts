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
  graduacaoSelecionada;
  constructor(
    private router: Router
  ) {
    // const navigation = this.router.getCurrentNavigation();
    // this.pessoaSelecionada = navigation.extras.state.pessoa;
  }

  ngOnInit(): void {
    this.popularGraduacao();
    // if (this.pessoaSelecionada == null) {
    //   this.router.navigate(['/administrativo/atleta/cadastrar/pessoa']);
    // }
  }

  private popularGraduacao() {
    this.graduacoes = [
      { label: 'Branca', id: 1},
      { label: 'Amarela', id: 2},
      { label: 'Vermelha', id: 3},
      { label: 'Laranja', id: 4},
      { label: 'Verde', id: 5},
      { label: 'Roxa', id: 6},
      { label: 'Marrom', id: 7},
      { label: 'Preta', id: 8},
    ];
  }

}
