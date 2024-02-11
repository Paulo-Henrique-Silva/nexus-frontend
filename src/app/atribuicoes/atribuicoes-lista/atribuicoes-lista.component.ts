import { Component, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { delay } from 'rxjs';

@Component({
  selector: 'nexus-atribuicoes-lista',
  templateUrl: './atribuicoes-lista.component.html',
  styleUrl: './atribuicoes-lista.component.scss'
})
export class AtribuicoesListaComponent implements OnInit {
  atribuicoes: AtribuicaoResposta[] = [];

  carregando: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.usuarioService.obterAtribuicoesPorUsuarioUID(1, this.sessaoService.uidUsuario)
      .subscribe({
        next: (atribuicoes) => {
          this.atribuicoes = atribuicoes.itens
          this.carregando = false;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      });
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
