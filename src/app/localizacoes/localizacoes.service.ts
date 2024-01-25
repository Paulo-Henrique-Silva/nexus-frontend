import { Injectable } from '@angular/core';
import { LocalizacaoResposta } from './models/localizacao-resposta';
import { HttpClient } from '@angular/common/http';
import { LocalizacaoEnvio } from './models/localizacao-envio';
import { ReferenciaObjeto } from '../compartilhado/models/referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class LocalizacoesService {

  localizacoes : LocalizacaoResposta[] = [
    { 
      uid: '1', nome: 'SAL1', descricao: 'Sala de Aula 1', 
      projeto: { uid: 'PJ1', nome: 'GRU' }, atualizadoPor: null, dataUltimaAtualizacao: null, 
      dataCriacao: new Date(), usuarioCriador: { uid: '1', nome: 'Paulo Silva'} 
    },
    { 
      uid: '2', nome: 'SAL2', descricao: 'Sala de Aula 2', 
      projeto: { uid: 'PJ1', nome: 'GRU' }, atualizadoPor: null, dataUltimaAtualizacao: null, 
      dataCriacao: new Date(), usuarioCriador: { uid: '1', nome: 'Paulo Silva'} 
    },
    { 
      uid: '3', nome: 'SAL3', descricao: 'Sala de Aula 3', 
      projeto: { uid: 'PJ1', nome: 'GRU' }, atualizadoPor: null, dataUltimaAtualizacao: null, 
      dataCriacao: new Date(), usuarioCriador: { uid: '1', nome: 'Paulo Silva'} 
    }
  ]

  constructor(private http: HttpClient) { }

  obterPorUID(uid: string) : LocalizacaoResposta | undefined {
    return this.localizacoes.find(obj => obj.uid === uid);
  }

  obterTudo(pagina: number) : LocalizacaoResposta[] {
    return this.localizacoes;
  }

  adicionar(localizacaoEnvio: LocalizacaoEnvio) {
    const localizacaoResposta: LocalizacaoResposta = {
      uid: String(Math.floor((Math.random() * 10000) + 1)),
      nome: localizacaoEnvio.nome,
      descricao: localizacaoEnvio.descricao,
      projeto: { uid: 'PJ1', nome: 'GRU' },
      dataUltimaAtualizacao: null,
      dataCriacao: new Date(), 
      atualizadoPor: null,
      usuarioCriador: { uid: '1', nome: 'Paulo Silva'}
    }

    this.localizacoes.push(localizacaoResposta);
  }

  editar(uid: string, localizacaoEnvio: LocalizacaoEnvio) {
    const localizacaoResposta: LocalizacaoResposta = {
      uid: String(Math.floor((Math.random() * 10000) + 1)),
      nome: localizacaoEnvio.nome,
      descricao: localizacaoEnvio.descricao,
      projeto: { uid: 'PJ1', nome: 'GRU' },
      dataUltimaAtualizacao: new Date(),
      dataCriacao: new Date(), 
      atualizadoPor: { uid: '1', nome: 'Paulo Silva'},
      usuarioCriador: { uid: '1', nome: 'Paulo Silva'}
    }

    this.localizacoes = this.localizacoes.map((obj) => {
      return obj.uid === uid ? localizacaoResposta : obj;
    })
  }

  deletar(uid: string) {
    const localizacao = this.localizacoes.find(obj => obj.uid === uid);

    if (localizacao) {
      this.localizacoes.splice(this.localizacoes.indexOf(localizacao), 1);
    }
  }
}
