import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { SoftwaresService } from '../../softwares/softwares.service';
import { ManutencoesService } from '../manutencoes.service';

@Component({
  selector: 'app-manutencoes-buscar',
  templateUrl: './manutencoes-buscar.component.html',
  styleUrl: './manutencoes-buscar.component.scss'
})
export class ManutencoesBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome',
    'componente',
    'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome',
    'Componente',
    'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: ManutencoesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}
