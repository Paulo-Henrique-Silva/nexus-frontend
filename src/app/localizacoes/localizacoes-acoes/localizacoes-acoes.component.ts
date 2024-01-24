import { Component, Input } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { LocalizacoesService } from '../localizacoes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeletarComponent } from '../../compartilhado/dialog-deletar/dialog-deletar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'nexus-localizacoes-acoes',
  templateUrl: './localizacoes-acoes.component.html',
  styleUrl: './localizacoes-acoes.component.scss'
})
export class LocalizacoesAcoesComponent {
  @Input()
  objeto: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    private localizacoService: LocalizacoesService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  deletarObjeto() {
    const dialogExcluir = this.dialog.open(DialogDeletarComponent, {
      data: this.objeto.nome
    });

    dialogExcluir.afterClosed().subscribe(resultado => {
      if (resultado === 'deletou') {
        this.localizacoService.deletar(this.objeto.UID);
      }
    })

  }
}
