import { Injectable } from '@angular/core';
import { LocalizacaoResposta } from './models/localizacao-resposta';
import { HttpClient } from '@angular/common/http';
import { LocalizacaoEnvio } from './models/localizacao-envio';

@Injectable({
  providedIn: 'root'
})
export class LocalizacoesService {

  localizacoes : LocalizacaoResposta[] = [
    { 
      UID: '1', nome: 'SAL1', descricao: 'Sala de Aula 1', 
      projeto: { UID: 'PJ1', nome: 'GRU' }, atualizadoPor: null, dataUltimaAtualizacao: null, 
      dataCriacao: new Date('2024-01-23 22:06'), usuarioCriador: { UID: '1', nome: 'Paulo Silva'} 
    }
  ]

  constructor(private http: HttpClient) { }

  obterPorUID() {

  }

  obterTudo(pagina: number) {

  }

  adicionar(LocalizacaoEnvio: LocalizacaoEnvio) {

  }

  editar(uid: string, LocalizacaoEnvio: LocalizacaoEnvio) {

  }

  deletar(uid: string) {

  }
}
