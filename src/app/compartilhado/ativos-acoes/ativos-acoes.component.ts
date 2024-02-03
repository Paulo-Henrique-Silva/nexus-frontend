import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, switchMap, EMPTY } from 'rxjs';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { DialogDeletarComponent } from '../dialog-deletar/dialog-deletar.component';
import { ReferenciaObjeto } from '../models/referencia-objeto';

@Component({
  selector: 'nexus-ativos-acoes',
  templateUrl: './ativos-acoes.component.html',
  styleUrl: './ativos-acoes.component.scss'
})
export class AtivosAcoesComponent {
  @Input()
  objeto: ReferenciaObjeto = new ReferenciaObjeto();

  @Input('textoDeletado')
  textoObjetoDeletado: string = 'Objeto deletado com sucesso!';
  
  @Output() 
  deletou = new EventEmitter<any>();

  @Output() 
  fechou = new EventEmitter<any>();

  constructor(
    private localizacoService: LocalizacoesService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { 
  }

  deletarObjeto(): void {
    const dialogExcluir = this.dialog.open(DialogDeletarComponent, {
      data: this.objeto.nome
    });

    dialogExcluir.afterClosed()
    .pipe(
      take(1),
      switchMap(deletou => {
          return deletou ? this.localizacoService.deletar(this.objeto.uid) : EMPTY;
      })
    )
    .subscribe({
      next: () => {
        //emite para carregar a tabela novamente.
        this.deletou.emit();
        this.mostrarSnackBarOk(this.textoObjetoDeletado);
      },
      error: () => this.mostrarSnackBarOk('Não foi possível excluir!')
    })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }

  fecharAcoes(): void {
    this.fechou.emit();
  }
}
