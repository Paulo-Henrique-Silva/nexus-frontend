import { Component, OnInit } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nexus-atribuicoes-lista',
  templateUrl: './atribuicoes-lista.component.html',
  styleUrl: './atribuicoes-lista.component.scss'
})
export class AtribuicoesListaComponent implements OnInit {
  atribuicoes: AtribuicaoResposta[] = [];

  atribuicoesAgrupadasEmAndamento: any = {};
  chavesAgrupadasEmAndamento: string[] = [];

  atribuicoesAgrupadasEmAtraso: any = {};
  chavesAgrupadasEmAtraso: string[] = [];

  atribuicoesAgrupadasConcluidas: any = {};
  chavesAgrupadasConcluidas: string[] = [];

  carregando: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.carregando = true;

    this.usuarioService.obterAtribuicoesPorUsuarioUID(1, this.sessaoService.uidUsuario)
      .subscribe({
        next: (atribuicoes) => {
          this.atribuicoes = atribuicoes.itens;
          this.agruparPorDataVencimento();
          this.carregando = false;
        },
        error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
      });
  }

  agruparPorDataVencimento(): void {
    this.atribuicoesAgrupadasEmAndamento = {};

    this.atribuicoes.forEach(objeto => {
      const dataAtual = new Date();
      dataAtual.setHours(17, 59, 0); //coloca como fim do horário comercial.
      
      const dataVencimento = new Date(objeto.dataVencimento);
      const dataChave = this.formatarDataVencimento(objeto.dataVencimento);

      //Agrupa atribuições concluídas.
      if (objeto.concluida && objeto.dataUltimaAtualizacao) {
        //cria chaves a partir da ultima att e não data de vencimento.

        const dataChaveUltimaAtt = this.formatarDataVencimento(objeto.dataUltimaAtualizacao);
        if (!this.atribuicoesAgrupadasConcluidas[dataChaveUltimaAtt]) {
          this.atribuicoesAgrupadasConcluidas[dataChaveUltimaAtt] = [];
        }

        this.atribuicoesAgrupadasConcluidas[dataChaveUltimaAtt].push(objeto);
      }
      //Agrupa atribuições concluídas e não vencidas.
      else if (dataVencimento >= dataAtual) {
        if (!this.atribuicoesAgrupadasEmAndamento[dataChave]) {
          this.atribuicoesAgrupadasEmAndamento[dataChave] = [];
        }

        this.atribuicoesAgrupadasEmAndamento[dataChave].push(objeto);
      }
      else {
        if (!this.atribuicoesAgrupadasEmAtraso[dataChave]) {
          this.atribuicoesAgrupadasEmAtraso[dataChave] = [];
        }

        this.atribuicoesAgrupadasEmAtraso[dataChave].push(objeto);
      }
    });

    this.chavesAgrupadasConcluidas = Object.keys(this.atribuicoesAgrupadasConcluidas);
    this.chavesAgrupadasEmAndamento = Object.keys(this.atribuicoesAgrupadasEmAndamento);
    this.chavesAgrupadasEmAtraso = Object.keys(this.atribuicoesAgrupadasEmAtraso);
    
    this.chavesAgrupadasConcluidas.sort((a, b) => a > b ? -1 : 1);
    this.chavesAgrupadasEmAndamento.sort();
    this.chavesAgrupadasEmAtraso.sort();
  }

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  formatarDataVencimento(dataVencimento: Date): string {
    const pipe = new DatePipe('en-US');
    const dataConvertida = new Date(dataVencimento);
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    
    //Converte data para dd/mm
    let dataStr = pipe.transform(dataConvertida, "dd/MM") ?? '';

    //Adiciona o dia da semana da data vencimento ou a palavra hoje se for para o mesmo dia.
    if (dataConvertida.getDay() == new Date().getDay()) {
      dataStr += ' - Hoje';
    }
    else {
      dataStr += ' - ' + diasDaSemana[dataConvertida.getDay()];
    }

    return dataStr;
  }
}
