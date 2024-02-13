import { Injectable } from '@angular/core';
import { NotificacaoEnvio } from './models/notificacao-envio';
import { NotificacaoResposta } from './models/notificacao-resposta';
import { HttpClient } from '@angular/common/http';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService extends NexusService<NotificacaoEnvio, NotificacaoResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Notificacao');
  }
}
