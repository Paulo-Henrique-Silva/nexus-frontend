import { Injectable } from '@angular/core';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { UsuarioEnvio } from './models/usuario-envio';
import { UsuarioResposta } from './models/usuario-resposta';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends NexusService<UsuarioEnvio, UsuarioResposta> {

  constructor(
    http: HttpClient
  ) {
    super(http, 'https://localhost:7172/api/Usuario');
  }

  login(envio: UsuarioEnvio): Observable<UsuarioResposta> {
    return this.http.post<UsuarioResposta>(this.url + '/login', envio).pipe(take(1))
  }
}
