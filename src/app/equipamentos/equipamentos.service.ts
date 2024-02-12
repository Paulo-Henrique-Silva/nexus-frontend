import { Injectable } from '@angular/core';
import { EquipamentoEnvio } from './models/equipamentos-envio';
import { EquipamentoResposta } from './models/equipamentos-resposta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { NexusListaResposta } from '../compartilhado/models/nexus-lista-resposta';
import { NexusReferenciaObjeto } from '../compartilhado/models/nexus-referencia-objeto';
import { NexusService } from '../compartilhado/services/nexus-service/nexus-service';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { LocalizacaoResposta } from '../localizacoes/models/localizacao-resposta';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService extends NexusService<EquipamentoEnvio, EquipamentoResposta> {
  constructor(
    http: HttpClient,
    sessaoService: SessaoService
  ) {
    super(http, sessaoService, 'https://localhost:7172/api/Equipamento');
  }

  obterTipos(): Observable<NexusReferenciaObjeto[]> {
    return this.http.get<NexusReferenciaObjeto[]>(this.url + '/Tipos', 
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
