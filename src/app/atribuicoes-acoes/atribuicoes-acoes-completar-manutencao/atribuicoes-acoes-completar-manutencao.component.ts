import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtribuicaoResposta } from '../../atribuicoes/models/atribuicao-resposta';
import { ManutencoesService } from '../../manutencoes/manutencoes.service';
import { ManutencaoResposta } from '../../manutencoes/models/manutencoes-resposta';
import { delay } from 'rxjs';

@Component({
  selector: 'nexus-atribuicoes-acoes-completar-manutencao',
  templateUrl: './atribuicoes-acoes-completar-manutencao.component.html',
  styleUrl: './atribuicoes-acoes-completar-manutencao.component.scss'
})
export class AtribuicoesAcoesCompletarManutencaoComponent implements OnInit {
  @Input()
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();

  carregando: boolean = false;

  manutencao: ManutencaoResposta = new ManutencaoResposta();

  constructor(
    private snackbar: MatSnackBar,
    private manutencaoService: ManutencoesService
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.manutencaoService.obterPorUID(this.atribuicao.objeto.uid)
      .subscribe({
        next: (manutencao) => {
          this.carregando = false;
          this.manutencao = manutencao;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
