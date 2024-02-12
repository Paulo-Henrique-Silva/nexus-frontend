import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, switchMap, EMPTY } from 'rxjs';
import { DialogDeletarComponent } from '../../compartilhado/dialog-deletar/dialog-deletar.component';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { EquipamentosService } from '../equipamentos.service';

@Component({
  selector: 'nexus-equipamentos-acoes',
  templateUrl: './equipamentos-acoes.component.html',
  styleUrl: './equipamentos-acoes.component.scss'
})
export class EquipamentosAcoesComponent {
  @Input()
  objeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  @Output() 
  deletou = new EventEmitter<any>();

  @Output() 
  fechou = new EventEmitter<any>();

  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    private service: EquipamentosService,
    sessaoService: SessaoService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }

  deletarObjeto(): void {
    const dialogExcluir = this.dialog.open(DialogDeletarComponent, {
      data: this.objeto.nome
    });

    dialogExcluir.afterClosed()
    .pipe(
      take(1),
      switchMap(deletou => {
          return deletou ? this.service.deletar(this.objeto.uid) : EMPTY;
      })
    )
    .subscribe({
      next: () => {
        //emite para carregar a tabela novamente.
        this.deletou.emit();
        this.mostrarSnackBarOk('Equipamento deletado com sucesso!');
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
