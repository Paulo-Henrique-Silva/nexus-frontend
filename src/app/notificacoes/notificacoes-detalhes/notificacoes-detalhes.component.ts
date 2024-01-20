import { Component } from '@angular/core';
import { Notificacao } from '../notificacao';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';

@Component({
  selector: 'nexus-notificacoes-detalhes',
  templateUrl: './notificacoes-detalhes.component.html',
  styleUrl: './notificacoes-detalhes.component.scss'
})
export class NotificacoesDetalhesComponent {
  notificacao: Notificacao =  new Notificacao("1", "Manutenção completada", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat dictum est. Maecenas malesuada imperdiet elit, non porttitor odio pulvinar quis. Curabitur ultrices aliquet pellentesque. Donec tristique commodo ornare. Curabitur sit amet facilisis lorem. Nunc et sollicitudin dui. Mauris dictum eleifend mi, vitae dapibus ex bibendum vel. Nam auctor tincidunt dapibus. Integer erat augue, vehicula eget massa quis, elementum ultricies turpis. Mauris a nibh viverra, tempor est eu, congue tellus. Donec arcu purus, egestas non euismod id, luctus sed est.", 
  new ReferenciaObjeto("2", "Paulo Silva"), true, new Date(2024, 1, 30), 
  new ReferenciaObjeto("2", "Paulo Silva"), new ReferenciaObjeto("2", "Paulo Silva"), 
  new Date(2024, 1, 30))
}