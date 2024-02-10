import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NexusService } from '../../../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../../../compartilhado/services/sessao/sessao.service';
import { ProjetoEnvio } from '../../models/projeto/projeto-envio';
import { ProjetoResposta } from '../../models/projeto/projeto-resposta';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService extends NexusService<ProjetoEnvio, ProjetoResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Projeto');
  }
}
