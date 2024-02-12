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
          this.dataVencimentoFormatada = pipe.transform(this.atribuicao.dataVencimento, 'dd/MM/yyyy HH:mm');
          if (this.dataVencimentoFormatada) {
            this.dataVencimentoFormatada = this.dataVencimentoFormatada.replace(' ', ' às ');
          }
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
