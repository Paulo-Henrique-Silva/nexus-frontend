import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';
import { UsuarioPerfilResposta } from '../model/usuario-perfil-resposta';
import { UsuarioPerfilEnvio } from '../model/usuario-perfil-envio';

//Não extende a classe NexusService por se tratar de uma classe de relacionamento.
@Injectable({
  providedIn: 'root'
})
export class UsuarioPerfilService {
  protected url: string = 'https://localhost:7172/api/UsuarioPerfil'

  constructor(
      protected http: HttpClient, 
      protected sessaoService: SessaoService) { 
  }

  obterPorUID(uid: string): Observable<UsuarioPerfilResposta> {
    return this.http.get<UsuarioPerfilResposta>(this.url + '/' + uid, { headers: this.header })
        .pipe(take(1));
  }

  obterTudo(pagina: number): Observable<UsuarioPerfilResposta[]> {
    const params = new HttpParams()
        .set('pagina', pagina.toString());

    return this.http.get<UsuarioPerfilResposta[]>(this.url, { params: params, headers: this.header })
    .pipe(take(1));
  }

  obterTudoPorUsuarioUID(usuarioUID: string): Observable<UsuarioPerfilResposta[]> {
    return this.http.get<UsuarioPerfilResposta[]>(this.url + '/usuario/' + usuarioUID, 
    { headers: this.header }).pipe(take(1));
  }

  adicionar(envio: UsuarioPerfilEnvio): Observable<UsuarioPerfilResposta> {
      return this.http.post<UsuarioPerfilResposta>(this.url, envio, { headers: this.header })
          .pipe(take(1));
  }

  editar(envio: UsuarioPerfilEnvio): Observable<UsuarioPerfilResposta> {
    const uids = `${envio.usuarioUID},${envio.projetoUID},${envio.perfilUID}`;

    return this.http.put<UsuarioPerfilResposta>(this.url + '/' + uids, 
      envio, { headers: this.header }).pipe(take(1));
  }

  deletar(envio: UsuarioPerfilEnvio): void {
    const uids = `${envio.usuarioUID},${envio.projetoUID},${envio.perfilUID}`;

    this.http.delete<UsuarioPerfilResposta>(this.url + '/' + uids, { headers: this.header })
        .pipe(take(1));
  }

  get header(): HttpHeaders {
    return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessaoService.token}`,
    });
  }
}
