import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrl: './botao-menu.component.scss'
})
export class BotaoMenuComponent {
  @Input()
  nome: string = ''

  @Input()
  icone: string = ''
}
