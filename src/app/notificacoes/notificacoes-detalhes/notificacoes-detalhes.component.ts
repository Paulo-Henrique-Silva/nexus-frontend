import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificacaoResposta } from '../models/notificacao-resposta';
import { NotificacoesService } from '../notificacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { NotificacaoEnvio } from '../models/notificacao-envio';

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
    ),
    switchMap(notificacao => {
      this.notificacao = notificacao;
      this.dataFormatada = this.formartarData(notificacao.dataCriacao)
      this.carregando = false;

      //Atualiza que a notificação foi vista.
      if (notificacao.vista) {
        return EMPTY;
      }

      const notificacaoVista: NotificacaoEnvio = {
        nome: notificacao.nome,
        descricao: notificacao.descricao,
        usuarioUID: notificacao.usuario.uid,
        vista: true
      };

      return this.notificacaoService.editar(notificacao.uid, notificacaoVista);
    })
    )
    .subscribe({
      next: () => {},
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
