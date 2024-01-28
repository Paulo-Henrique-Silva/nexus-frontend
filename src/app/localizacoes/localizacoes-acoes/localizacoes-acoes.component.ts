import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { LocalizacoesService } from '../localizacoes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeletarComponent } from '../../compartilhado/dialog-deletar/dialog-deletar.component';
import { Router } from '@angular/router';
import { EMPTY, switchMap, take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nexus-localizacoes-acoes',
  templateUrl: './localizacoes-acoes.component.html',
  styleUrl: './localizacoes-acoes.component.scss'
})
export class LocalizacoesAcoesComponent {
  @Input()
  objeto: ReferenciaObjeto = new ReferenciaObjeto();
  
  @Output() 
  deletou = new EventEmitter<any>();

  @Output() 
  fechou = new EventEmitter<any>();

  protected textoObjetoDeletado: string = 'Localização deletada com sucesso!';

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
