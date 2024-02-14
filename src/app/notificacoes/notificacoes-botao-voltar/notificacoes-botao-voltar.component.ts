import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-notificacoes-botao-voltar',
  templateUrl: './notificacoes-botao-voltar.component.html',
  styleUrl: './notificacoes-botao-voltar.component.scss'
})
export class NotificacoesBotaoVoltarComponent {
  @Input()
  caminho: string = '';
}
