import { Component, Input, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nexus-atribuicoes-card',
  templateUrl: './atribuicoes-card.component.html',
  styleUrl: './atribuicoes-card.component.scss'
})
export class AtribuicoesCardComponent implements OnInit {
  @Input()
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();

  dataVencimentoFormatada: string | null = '';
  
  ngOnInit(): void {
    const pipe = new DatePipe('en-US');

    this.dataVencimentoFormatada = pipe.transform(this.atribuicao.dataVencimento, ' HH:mm');

    if (this.dataVencimentoFormatada) {
      this.dataVencimentoFormatada = this.dataVencimentoFormatada.replace(' ', 'às ');
    }
  }
}
