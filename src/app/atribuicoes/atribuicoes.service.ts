import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { AtribuicaoEnvio } from './models/atribuicao-envio';
import { AtribuicaoResposta } from './models/atribuicao-resposta';

@Injectable({
  providedIn: 'root'
})
export class AtribuicoesService extends NexusService<AtribuicaoEnvio, AtribuicaoResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Atribuicao');
  }

}
