import { Component, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { AtribuicoesService } from '../atribuicoes.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nexus-atribuicoes-detalhes',
  templateUrl: './atribuicoes-detalhes.component.html',
  styleUrl: './atribuicoes-detalhes.component.scss'
})
export class AtribuicoesDetalhesComponent implements OnInit {
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();
  dataVencimentoFormatada: string | null = '';

  carregando: boolean = false;

  constructor(
    private atribuicaoService: AtribuicoesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.carregando = true;
    const pipe = new DatePipe('en-US');
    const atribuicaoUID = this.activatedRoute.snapshot.params['uid'];

    this.atribuicaoService.obterPorUID(atribuicaoUID)
      .subscribe({
        next: (atribuicao) => {
          this.carregando = false;
          this.atribuicao = atribuicao;

          //formatar data
          this.dataVencimentoFormatada = pipe.transform(this.atribuicao.dataVencimento, 'dd/MM/yyyy HH:mm');
          if (this.dataVencimentoFormatada) {
            this.dataVencimentoFormatada = this.dataVencimentoFormatada.replace(' ', ' às ');
          }
        }
      })
  }
}
