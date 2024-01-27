import { Injectable } from '@angular/core';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { UsuarioEnvio } from './models/usuario-envio';
import { UsuarioResposta } from './models/usuario-resposta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, take } from 'rxjs';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends NexusService<UsuarioEnvio, UsuarioResposta> {

  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Usuario');
  }

  login(envio: UsuarioEnvio): Observable<UsuarioResposta> {
    return this.http.post<UsuarioResposta>(this.url + '/login', envio).pipe(take(1));
  }

  confirmarSenha(envio: UsuarioEnvio): Observable<boolean> {
    return this.http.post<boolean>(this.url + '/' + this.sessaoService.uidUsuario 
    + '/senha', envio, { headers: this.header })
      .pipe(
        take(1),
        map((resposta) : any => resposta),
        map(resposta => (resposta.senhaCorreta))
      );
  }
}
