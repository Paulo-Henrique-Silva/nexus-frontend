import { Injectable } from '@angular/core';
import { NexusCicloVidaService } from '../../compartilhado/services/nexus-ciclo-vida-service/nexus-ciclo-vida-service';
import { HttpClient } from '@angular/common/http';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class VerificacaoManutencaoService extends NexusCicloVidaService {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/CicloVida/VerificacaoManutencao');
  }
}
