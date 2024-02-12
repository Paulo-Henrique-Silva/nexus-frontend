import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtribuicaoResposta } from '../../atribuicoes/models/atribuicao-resposta';
import { ManutencoesService } from '../../manutencoes/manutencoes.service';
import { ManutencaoResposta } from '../../manutencoes/models/manutencoes-resposta';
import { Router } from '@angular/router';
import { VerificacaoManutencaoService } from '../../manutencoes/ciclo-vida/verificacao-manutencao.service';

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
    private manutencaoService: ManutencoesService,
    private verificacaoManutencao: VerificacaoManutencaoService,
    private router: Router
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

  completar(): void {
    this.verificacaoManutencao.usuarioConcluiu({ sucesso: true, atribuicaoUID: this.atribuicao.uid })
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Manutenção completada!');
          this.router.navigate(['/atribuicoes']);
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
