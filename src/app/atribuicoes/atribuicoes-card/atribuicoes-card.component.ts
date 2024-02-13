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
  dataUltimaAtualizacaoFormatada: string | null = '';
  emAtraso: boolean = false;
  
  ngOnInit(): void {
    this.dataVencimentoFormatada = this.formartarData(this.atribuicao.dataVencimento);
    this.dataUltimaAtualizacaoFormatada = this.formartarData(this.atribuicao.dataUltimaAtualizacao);

    const dataAtual = new Date();
    dataAtual.setHours(17, 59, 0);
    
    this.emAtraso = new Date(this.atribuicao.dataVencimento) < dataAtual;
  }
  
  formartarData(data: Date | null): string {
    const pipe = new DatePipe('en-US');
    let dataFormatada = pipe.transform(data, ' HH:mm');

    if (dataFormatada) {
      dataFormatada = dataFormatada.replace(' ', 'às ');
    }

    return dataFormatada ?? '';
  }
}
