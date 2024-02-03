import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { LocalizacoesService } from '../localizacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome', 'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome', 'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: LocalizacoesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}