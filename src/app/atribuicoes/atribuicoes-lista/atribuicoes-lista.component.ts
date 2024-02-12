import { Component, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nexus-atribuicoes-lista',
  templateUrl: './atribuicoes-lista.component.html',
  styleUrl: './atribuicoes-lista.component.scss'
})
export class AtribuicoesListaComponent implements OnInit {
  atribuicoes: AtribuicaoResposta[] = [];
  atribuicoesAgrupadas: any = {};
  chavesAgrupadas: string[] = [];

  carregando: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.usuarioService.obterAtribuicoesPorUsuarioUID(1, this.sessaoService.uidUsuario)
      .subscribe({
        next: (atribuicoes) => {
          this.atribuicoes = atribuicoes.itens;
          this.agruparPorDataVencimento();
          this.carregando = false;

          console.log(this.atribuicoesAgrupadas);
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      });
  }

  agruparPorDataVencimento(): void {
    this.atribuicoesAgrupadas = {};

    this.atribuicoes.forEach(objeto => {
      const data = this.formatarDataVencimento(objeto.dataVencimento);

      if (!this.atribuicoesAgrupadas[data]) {
        this.atribuicoesAgrupadas[data] = [];
      }
      this.atribuicoesAgrupadas[data].push(objeto);
    });

    this.chavesAgrupadas = Object.keys(this.atribuicoesAgrupadas);
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  formatarDataVencimento(dataVencimento: Date): string {
    const pipe = new DatePipe('de-at');
    return pipe.transform(dataVencimento, "dd \'de\' MMMM") ?? '';
  }
}
