import { Component, Input } from '@angular/core';

//Volta a uma determinada página.
@Component({
  selector: 'nexus-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrl: './botao-voltar.component.scss'
})
export class BotaoVoltarComponent {
  @Input()
  caminho: string = ''

  
}
