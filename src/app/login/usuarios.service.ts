import { Injectable } from '@angular/core';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { UsuarioEnvio } from './models/usuario-envio';
import { UsuarioResposta } from './models/usuario-resposta';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { UsuarioSessaoService } from '../compartilhado/services/usuario-sessao/usuario-sessao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends NexusService<UsuarioEnvio, UsuarioResposta> {

  constructor(
    http: HttpClient,
    usuarioSessaoService: UsuarioSessaoService
  ) {
    super(http, usuarioSessaoService, 'https://localhost:7172/api/Usuario');
  }

  login(envio: UsuarioEnvio): Observable<UsuarioResposta> {
    return this.http.post<UsuarioResposta>(this.url + '/login', envio).pipe(take(1))
  }
}
