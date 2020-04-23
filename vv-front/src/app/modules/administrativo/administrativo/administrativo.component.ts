import { MenuItem } from 'primeng/api/menuitem';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoa } from '../../pessoa/pessoa';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss']
})
export class AdministrativoComponent implements OnInit {

  // Usuario autenticado
  usuarioAutenticado: Pessoa;

  itemsMenu: MenuItem[];
  itemsMenuBar: MenuItem[];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUsuarioLogado();
    this.title.setTitle('Administrativo Karatê');
    this.criarMenu();
    this.criarMenuBar();
  }

  private getUsuarioLogado() {
    this.route.data.subscribe(
      (pessoa) => {
        this.usuarioAutenticado = pessoa.pessoa;
      });
  }

  private criarMenu() {
    this.itemsMenu = [
      {
        label: 'Menu',
        items: [
          {
            label: 'Principal',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/administrativo']
          }
        ]
      },
      {
        label: 'Usuários',
        items: [
          {
            label: 'Cadastrar',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/novaPessoa']
          },
          {
            label: 'Listar',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/administrativo/pessoa/listar']

          },
          { label: 'Gerenciar', icon: 'pi pi-fw pi-cog' }
        ]
      },
      {
        label: 'Atletas',
        items: [
          {
            label: 'Cadastrar',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/administrativo/atleta/cadastrar']
          },
          { label: 'Listar', icon: 'pi pi-fw pi-users' },
          { label: 'Gerenciar', icon: 'pi pi-fw pi-cog' }
        ]
      },
      {
        label: 'Campeonatos',
        items: [
          { label: 'Agendar', icon: 'pi pi-fw pi-plus' },
          { label: 'Gerenciar', icon: 'pi pi-fw pi-calendar' }
        ]
      },
      {
        label: ''
      },

    ];
  }

  private criarMenuBar() {
    this.itemsMenuBar = [
      {
        label: 'Bem Vindo, Yuri Gabriel',
        icon: 'pi pi-fw pi-user',
        items: [
          { label: 'Perfil', icon: 'pi pi-fw pi-user-edit' }
        ]
      },
      { separator: true },
      {
        label: 'Alguma coisa'
      }
    ];
  }
}
