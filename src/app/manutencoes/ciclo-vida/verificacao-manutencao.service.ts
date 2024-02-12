import { Injectable } from '@angular/core';
import { NexusCicloVidaService } from '../../compartilhado/services/nexus-ciclo-vida-service/nexus-ciclo-vida-service';
import { HttpClient } from '@angular/common/http';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { Observable, take } from 'rxjs';
import { NexusResponderCicloVida } from '../../compartilhado/models/ciclo-vida/nexus-responder-ciclo-vida';

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

  usuarioConcluiu(envio: NexusResponderCicloVida): Observable<void> {
    return this.http.post<void>(this.url + '/UsuarioConcluiu', envio, 
    { headers: this.header }).pipe(take(1));
  }
}
