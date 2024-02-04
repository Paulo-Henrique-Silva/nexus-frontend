import { Injectable } from '@angular/core';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { ComponenteEnvio } from './models/componentes-envio';
import { ComponenteResposta } from './models/componentes-resposta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { Observable, take } from 'rxjs';
import { NexusListaResposta } from '../compartilhado/models/nexus-lista-resposta';
import { LocalizacaoResposta } from '../localizacoes/models/localizacao-resposta';
import { ReferenciaObjeto } from '../compartilhado/models/referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService extends NexusService<ComponenteEnvio, ComponenteResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Componente');
  }

  obterTipos(): Observable<ReferenciaObjeto[]> {
    return this.http.get<ReferenciaObjeto[]>(this.url + '/Tipos', 
    { headers: this.header }).pipe(take(1));
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
