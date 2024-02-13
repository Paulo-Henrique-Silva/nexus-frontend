import { Component, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { AtribuicoesService } from '../atribuicoes.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nexus-atribuicoes-detalhes',
  templateUrl: './atribuicoes-detalhes.component.html',
  styleUrl: './atribuicoes-detalhes.component.scss'
})
export class AtribuicoesDetalhesComponent implements OnInit {
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();
  dataVencimentoFormatada: string | null = '';
  dataUltimaAttFormatada: string | null = '';
  emAtraso: boolean = false;

  carregando: boolean = false;

  constructor(
    private atribuicaoService: AtribuicoesService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
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
          this.dataVencimentoFormatada = this.formartarData(this.atribuicao.dataVencimento);
          this.dataUltimaAttFormatada = this.formartarData(this.atribuicao.dataUltimaAtualizacao);

          const dataAtual = new Date();
          dataAtual.setHours(17, 59, 0);
    
          this.emAtraso = new Date(this.atribuicao.dataVencimento) < dataAtual;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  formartarData(data: Date | null): string {
    const pipe = new DatePipe('en-US');
    let dataFormatada = pipe.transform(data, 'dd/MM/yyy HH:mm');

    if (dataFormatada) {
      dataFormatada = dataFormatada.replace(' ', ' às ');
    }

    return dataFormatada ?? '';
  }
}
