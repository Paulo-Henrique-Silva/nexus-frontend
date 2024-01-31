import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nexus-botao-acoes',
  templateUrl: './botao-acoes.component.html',
  styleUrl: './botao-acoes.component.scss'
})
export class BotaoAcoesComponent {
  @Input()
  link?: string | any[];

  @Input()
  icone: string = '';

  @Input()
  texto: string = '';
}
