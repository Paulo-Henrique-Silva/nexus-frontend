import { Component } from '@angular/core';
import { AtribuicaoResposta } from '../models/atribuicao-resposta';

@Component({
  selector: 'nexus-atribuicoes-lista',
  templateUrl: './atribuicoes-lista.component.html',
  styleUrl: './atribuicoes-lista.component.scss'
})
export class AtribuicoesListaComponent {
  atribuicoes: AtribuicaoResposta[] = [
    { 
      uid: "1",
      nome: "Aprovar requisição",
      descricao: "Aprove a descrição conforme dito.",
      usuario: {
        uid: '1',
        nome: 'PAUlO SILVA'
      },
      tipoAtribuicao: 0,
      concluida: false,
      cicloVida: {
        uid: '1',
        nome: 'Análise do Coordenador'
      },
      dataVencimento: new Date(2024, 5, 7),
      dataUltimaAtualizacao: new Date(2024, 1, 20),
      atualizadoPor: {
        uid: '',
        nome: ''
      },
      usuarioCriador: {
        uid: '',
        nome: ''
      },
      dataCriacao: new Date(2024, 1, 20)
    },
    { 
      uid: "2",
      nome: "Complete a manutenção",
      descricao: "Aprove a descrição conforme dito.",
      usuario: {
        uid: '1',
        nome: 'PAUlO SILVA'
      },
      tipoAtribuicao: 0,
      concluida: false,
      cicloVida: {
        uid: '1',
        nome: 'Análise do Coordenador'
      },
      dataVencimento: new Date(2024, 5, 7),
      dataUltimaAtualizacao: new Date(2024, 1, 20),
      atualizadoPor: {
        uid: '',
        nome: ''
      },
      usuarioCriador: {
        uid: '',
        nome: ''
      },
      dataCriacao: new Date(2024, 1, 20)
    }
  ]
}
