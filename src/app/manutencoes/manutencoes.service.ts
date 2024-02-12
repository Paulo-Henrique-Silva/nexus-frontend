import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { NexusListaResposta } from '../compartilhado/models/dtos/nexus-lista-resposta';
import { NexusReferenciaObjeto } from '../compartilhado/models/dtos/nexus-referencia-objeto';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { LocalizacaoResposta } from '../localizacoes/models/localizacao-resposta';
import { ManutencaoEnvio } from './models/manutencoes-envio';
import { ManutencaoResposta } from './models/manutencoes-resposta';

@Injectable({
  providedIn: 'root'
})
export class ManutencoesService extends NexusService<ManutencaoEnvio, ManutencaoResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Manutencao');
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
