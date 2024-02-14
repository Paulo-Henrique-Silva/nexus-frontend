import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-configuracoes-botao-voltar',
  templateUrl: './configuracoes-botao-voltar.component.html',
  styleUrl: './configuracoes-botao-voltar.component.scss'
})
export class ConfiguracoesBotaoVoltarComponent {
  @Input()
  caminho: string = '';
}
