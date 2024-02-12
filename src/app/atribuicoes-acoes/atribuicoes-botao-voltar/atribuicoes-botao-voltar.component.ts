import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-atribuicoes-botao-voltar',
  templateUrl: './atribuicoes-botao-voltar.component.html',
  styleUrl: './atribuicoes-botao-voltar.component.scss'
})
export class AtribuicoesBotaoVoltarComponent {
  @Input()
  caminho: string = '/atribuicoes';
}
