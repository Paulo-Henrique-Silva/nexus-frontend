import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { RequisicoesService } from '../requisicoes.service';

@Component({
  selector: 'app-requisicoes-buscar',
  templateUrl: './requisicoes-buscar.component.html',
  styleUrl: './requisicoes-buscar.component.scss'
})
export class RequisicoesBuscarComponent extends NexusBuscar {
  override colunas: string[] = [ 
    'nome', 'coordenador', 'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome', 'Coordenador', 'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: RequisicoesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}
