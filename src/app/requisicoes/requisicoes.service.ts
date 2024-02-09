import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { NexusListaResposta } from '../compartilhado/models/nexus-lista-resposta';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { LocalizacaoEnvio } from '../localizacoes/models/localizacao-envio';
import { LocalizacaoResposta } from '../localizacoes/models/localizacao-resposta';
import { RequisicaoEnvio } from './model/requisicao-envio';
import { RequisicaoResposta } from './model/requisicao-resposta';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService extends NexusService<RequisicaoEnvio, RequisicaoResposta> {

  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Requisicao');
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
