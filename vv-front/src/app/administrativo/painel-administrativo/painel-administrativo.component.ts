import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../../pessoa/pessoa';

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.scss']
})
export class PainelAdministrativoComponent implements OnInit {

  usuarioAutenticado: Pessoa;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUsuarioLogado();
  }

  // // Retornando Usuario logado
  private getUsuarioLogado() {
    // Pegando valores do Banco de dados
    this.route.data
      .pipe(
        take(1)
      )
      .subscribe(
        (pessoa) => {
          this.usuarioAutenticado = pessoa.pessoa;
        });
  }
}
