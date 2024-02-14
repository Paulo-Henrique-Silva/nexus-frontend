import { Component, Input } from '@angular/core';
import { NotificacaoResposta } from '../models/notificacao-resposta';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';

@Component({
  selector: 'nexus-notificacoes-card',
  templateUrl: './notificacoes-card.component.html',
  styleUrl: './notificacoes-card.component.scss'
})
export class NotificacoesCardComponent {
  @Input()
  notificacao: NotificacaoResposta = new NotificacaoResposta();

  verNotificacao(): void {
    this.notificacao.vista = true;
  }
}
