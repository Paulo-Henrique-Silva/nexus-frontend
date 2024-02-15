import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AtribuicaoResposta } from '../../atribuicoes/models/atribuicao-resposta';
import { AnaliseRequisicaoService } from '../../requisicoes/ciclo-vida/analise-requisicao.service';
import { RequisicaoResposta } from '../../requisicoes/model/requisicao-resposta';
import { RequisicoesService } from '../../requisicoes/requisicoes.service';

@Component({
  selector: 'nexus-atribuicoes-acoes-completar-requisicao',
  templateUrl: './atribuicoes-acoes-completar-requisicao.component.html',
  styleUrl: './atribuicoes-acoes-completar-requisicao.component.scss'
})
export class AtribuicoesAcoesCompletarRequisicaoComponent implements OnInit {
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

  completar(): void {
    this.analiseRequisicao.coordenadorCompletou({ sucesso: true, atribuicaoUID: this.atribuicao.uid })
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Requisição completada!');
          this.router.navigate(['/atribuicoes']);
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
      })
  }
  mostrarSnackBarOk(texto: string): void {
    this.snackbar.open(texto, 'Ok')._dismissAfter(3000);
  }
}
