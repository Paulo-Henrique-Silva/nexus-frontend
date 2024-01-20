import { Component, Input } from '@angular/core';
import { Notificacao } from '../notificacao';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';

@Component({
  selector: 'nexus-notificacoes-card',
  templateUrl: './notificacoes-card.component.html',
  styleUrl: './notificacoes-card.component.scss'
})
export class NotificacoesCardComponent {
  @Input()
  notificacao: Notificacao = new Notificacao("1", "Requisição aprovada", "Coordenador aprovou a requisição de compra.", 
  new ReferenciaObjeto("2", "Paulo Silva"), false, new Date(2024, 1, 30), 
  new ReferenciaObjeto("2", "Paulo Silva"), new ReferenciaObjeto("2", "Paulo Silva"), 
  new Date(2024, 1, 30))
}
