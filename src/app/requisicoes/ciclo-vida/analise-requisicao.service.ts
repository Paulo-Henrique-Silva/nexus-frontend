import { Injectable } from '@angular/core';
import { NexusCicloVidaService } from '../../compartilhado/services/nexus-ciclo-vida-service/nexus-ciclo-vida-service';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { NexusResponderCicloVida } from '../../compartilhado/models/ciclo-vida/nexus-responder-ciclo-vida';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class AnaliseRequisicaoService extends NexusCicloVidaService {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/CicloVida/AnaliseRequisicao');
  }

  analiseCoordenador(envio: NexusResponderCicloVida): Observable<void> {
    return this.http.post<void>(this.url + '/AnaliseCoordenador', envio, 
    { headers: this.header }).pipe(take(1));
  }

  coordenadorCompletou(envio: NexusResponderCicloVida): Observable<void> {
    return this.http.post<void>(this.url + '/CoordenadorCompletou', envio, 
    { headers: this.header }).pipe(take(1));
  }
}
