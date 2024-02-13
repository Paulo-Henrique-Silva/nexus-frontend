import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, switchMap, EMPTY } from 'rxjs';
import { DialogDeletarComponent } from '../../compartilhado/dialog-deletar/dialog-deletar.component';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ManutencoesService } from '../manutencoes.service';
import { ManutencaoResposta } from '../models/manutencoes-resposta';

@Component({
  selector: 'nexus-manutencoes-acoes',
  templateUrl: './manutencoes-acoes.component.html',
  styleUrl: './manutencoes-acoes.component.scss'
})
export class ManutencoesAcoesComponent implements OnChanges {
  @Input()
  objeto: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  manutencao: ManutencaoResposta = new ManutencaoResposta();

  usuarioEoResponsavel: boolean = false;

  @Output() 
  deletou = new EventEmitter<any>();

  @Output() 
  fechou = new EventEmitter<any>();

  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    private service: ManutencoesService,
    private sessaoService: SessaoService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private manutencaoService: ManutencoesService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }

  ngOnChanges(): void {
    this.manutencaoService.obterPorUID(this.objeto.uid)
      .subscribe({
        next: (manutencao) => {
          this.manutencao = manutencao;
          this.usuarioEoResponsavel = this.sessaoService.uidUsuario == manutencao.responsavel.uid;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      })
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
        this.mostrarSnackBarOk('Manutenção deletada com sucesso!');
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
