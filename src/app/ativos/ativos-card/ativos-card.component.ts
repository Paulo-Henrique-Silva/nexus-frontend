import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-ativos-card',
  templateUrl: './ativos-card.component.html',
  styleUrl: './ativos-card.component.scss'
})
export class AtivosCardComponent {

  //Nome do icone do angular material.
  @Input()
  icone: string = ''

  //Nome do conjunto de ativos.
  @Input()
  nome: string = ''
}
