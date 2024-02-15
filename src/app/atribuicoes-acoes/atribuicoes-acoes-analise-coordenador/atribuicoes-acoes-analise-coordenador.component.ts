import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AtribuicaoResposta } from '../../atribuicoes/models/atribuicao-resposta';
import { VerificacaoManutencaoService } from '../../manutencoes/ciclo-vida/verificacao-manutencao.service';
import { ManutencoesService } from '../../manutencoes/manutencoes.service';
import { ManutencaoResposta } from '../../manutencoes/models/manutencoes-resposta';
import { RequisicoesService } from '../../requisicoes/requisicoes.service';
import { RequisicaoResposta } from '../../requisicoes/model/requisicao-resposta';
import { AnaliseRequisicaoService } from '../../requisicoes/ciclo-vida/analise-requisicao.service';

@Component({
  selector: 'nexus-atribuicoes-acoes-analise-coordenador',
  templateUrl: './atribuicoes-acoes-analise-coordenador.component.html',
  styleUrl: './atribuicoes-acoes-analise-coordenador.component.scss'
})
export class AtribuicoesAcoesAnaliseCoordenadorComponent implements OnInit {
  @Input()
  atribuicao: AtribuicaoResposta = new AtribuicaoResposta();

  carregando: boolean = false;

  requisicao: RequisicaoResposta = new RequisicaoResposta();

  constructor(
    private snackbar: MatSnackBar,
    private requisicaoService: RequisicoesService,
    private analiseRequisicao: AnaliseRequisicaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.requisicaoService.obterPorUID(this.atribuicao.objeto.uid)
      .subscribe({
        next: (requisicao) => {
          this.carregando = false;
          this.requisicao = requisicao;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }

  aprovar(): void {
    this.analiseRequisicao.analiseCoordenador({ sucesso: true, atribuicaoUID: this.atribuicao.uid })
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Requisição aprovada!');
          this.router.navigate(['/atribuicoes']);
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }

  reprovar(): void {
    this.analiseRequisicao.analiseCoordenador({ sucesso: false, atribuicaoUID: this.atribuicao.uid })
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Requisição reprovada!');
          this.router.navigate(['/atribuicoes']);
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }

}
