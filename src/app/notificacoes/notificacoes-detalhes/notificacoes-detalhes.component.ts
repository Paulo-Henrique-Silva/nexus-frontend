import { Component } from '@angular/core';
import { NotificacaoResposta } from '../models/notificacao-resposta';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';

@Component({
  selector: 'nexus-notificacoes-detalhes',
  templateUrl: './notificacoes-detalhes.component.html',
  styleUrl: './notificacoes-detalhes.component.scss'
})
export class NotificacoesDetalhesComponent {
  notificacao: NotificacaoResposta = { 
    UID: "1",
    nome: "Requisição aprovada",
    descricao: "A abordagem de ter DTOs separados para operações de envio e resposta é comum em muitos sistemas, incluindo .NET. Essa prática ajuda a manter uma clara separação de responsabilidades entre o que o cliente envia e o que o servidor retorna. Essa separação também facilita a evolução independente dos modelos de envio e resposta ao longo do tempo.",
    usuario: {
      UID: '1',
      nome: 'PAUlO SILVA'
    },
    vista: false,
    dataUltimaAtualizacao: new Date(2024, 1, 20),
    atualizadoPor: {
      UID: '',
      nome: ''
    },
    usuarioCriador: {
      UID: '',
      nome: ''
    },
    dataCriacao: new Date(2024, 1, 20)
  }
}
