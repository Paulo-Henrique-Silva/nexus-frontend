import { Component, OnInit } from '@angular/core';
import { NotificacaoResposta } from './models/notificacao-resposta';
import { UsuariosService } from '../login/usuarios.service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nexus-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrl: './notificacoes.component.scss'
})
export class NotificacoesComponent implements OnInit {
  notificacoes: NotificacaoResposta[] = [];
  carregando: boolean = false;

  constructor(
    private usuarioService: UsuariosService,
    private sessaoService: SessaoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregando = true;

    this.usuarioService.obterNotificacoesPorUsuarioUID(this.sessaoService.uidUsuario)
    .subscribe({
      next: (notificacoes) => {
        this.notificacoes = notificacoes.itens;
        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
