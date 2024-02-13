import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificacaoResposta } from '../models/notificacao-resposta';
import { NotificacoesService } from '../notificacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nexus-notificacoes-detalhes',
  templateUrl: './notificacoes-detalhes.component.html',
  styleUrl: './notificacoes-detalhes.component.scss'
})
export class NotificacoesDetalhesComponent implements OnInit, OnDestroy {
  notificacao: NotificacaoResposta = new NotificacaoResposta();
  carregando: boolean = false;

  inscricaoParametros: Subscription = new Subscription;

  dataFormatada: string = '';

  constructor(
    private notificacaoService: NotificacoesService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.inscricaoParametros = this.activatedRoute.params
    .pipe(
      switchMap(parametros => {
        this.carregando = true;
        const uid = parametros['uid'];

        return this.notificacaoService.obterPorUID(uid);
      }
    )
    )
    .subscribe({
      next: (notificacao) => {
        this.notificacao = notificacao;
        this.dataFormatada = this.formartarData(notificacao.dataCriacao)
        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }

  ngOnDestroy(): void {
    this.inscricaoParametros.unsubscribe();
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  formartarData(data: Date | null): string {
    const pipe = new DatePipe('en-US');
    const dataFormatada = pipe.transform(data, 'dd/MM/yyy HH:mm');

    return dataFormatada ?? '';
  }
}
