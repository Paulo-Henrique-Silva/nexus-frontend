import { Component, Input } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';

@Component({
  selector: 'nexus-atribuicoes-card',
  templateUrl: './atribuicoes-card.component.html',
  styleUrl: './atribuicoes-card.component.scss'
})
export class AtribuicoesCardComponent {
  @Input()
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta()
}
