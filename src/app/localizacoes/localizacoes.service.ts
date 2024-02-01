import { Injectable } from '@angular/core';
import { LocalizacaoResposta } from './models/localizacao-resposta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalizacaoEnvio } from './models/localizacao-envio';
import { ReferenciaObjeto } from '../compartilhado/models/referencia-objeto';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { Observable, take } from 'rxjs';
import { NexusListaResposta } from '../compartilhado/models/nexus-lista-resposta';

@Injectable({
  providedIn: 'root'
})
export class LocalizacoesService extends NexusService<LocalizacaoEnvio, LocalizacaoResposta> {

  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Localizacao');
  }

  obterTudoPorProjetoUID(pagina: number, projetoUID: string, nome: string | null = null): 
  Observable<NexusListaResposta<LocalizacaoResposta>> {
    let params;

    if (nome) {
      params = new HttpParams()
        .set('pagina', pagina.toString())
        .set('nome', nome.toString());
    }
    else {
      params = new HttpParams()
        .set('pagina', pagina.toString());
    }

    return this.http.get<NexusListaResposta<LocalizacaoResposta>>(this.url + '/Projeto/' + projetoUID, 
    { params: params, headers: this.header }).pipe(take(1));
  }

}