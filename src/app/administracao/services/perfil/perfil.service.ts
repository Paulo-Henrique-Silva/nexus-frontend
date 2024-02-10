import { Injectable } from '@angular/core';
import { PerfilEnvio } from '../../models/perfil/perfil-envio';
import { PerfilResposta } from '../../models/perfil/perfil-resposta';
import { HttpClient } from '@angular/common/http';
import { NexusService } from '../../../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../../../compartilhado/services/sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends NexusService<PerfilEnvio, PerfilResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Perfil');
  }
}
