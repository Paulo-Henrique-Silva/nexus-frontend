import { Injectable } from '@angular/core';
import { LocalizacaoResposta } from './models/localizacao-resposta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalizacaoEnvio } from './models/localizacao-envio';
import { ReferenciaObjeto } from '../compartilhado/models/referencia-objeto';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { Observable, take } from 'rxjs';

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

  obterTudoPorProjetoUID(pagina: number, projetoUID: string): Observable<LocalizacaoResposta[]> {
    const params = new HttpParams()
        .set('pagina', pagina.toString());

    return this.http.get<LocalizacaoResposta[]>(this.url + '/Projeto/' + projetoUID, 
    { params: params, headers: this.header }).pipe(take(1));
  }

}