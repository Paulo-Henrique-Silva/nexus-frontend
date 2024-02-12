import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtribuicaoResposta } from '../../atribuicoes/models/atribuicao-resposta';

@Component({
  selector: 'nexus-atribuicoes-acoes-completar-manutencao',
  templateUrl: './atribuicoes-acoes-completar-manutencao.component.html',
  styleUrl: './atribuicoes-acoes-completar-manutencao.component.scss'
})
export class AtribuicoesAcoesCompletarManutencaoComponent {
  @Input()
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();

  constructor(
    private snackbar: MatSnackBar
  ) { }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
