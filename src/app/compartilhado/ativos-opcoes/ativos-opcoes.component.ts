import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-ativos-opcoes',
  templateUrl: './ativos-opcoes.component.html',
  styleUrl: './ativos-opcoes.component.scss'
})
export class AtivosOpcoesComponent {
  //Nome do icone do angular material.
  @Input()
  icone: string = ''

  //Nome do conjunto de ativos.
  @Input()
  nome: string = ''
}
