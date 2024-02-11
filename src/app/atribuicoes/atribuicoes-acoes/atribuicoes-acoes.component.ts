import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';

@Component({
  selector: 'nexus-atribuicoes-acoes',
  templateUrl: './atribuicoes-acoes.component.html',
  styleUrl: './atribuicoes-acoes.component.scss'
})
export class AtribuicoesAcoesComponent {
  @Input()
  objeto: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    private snackbar: MatSnackBar
  ) { }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
