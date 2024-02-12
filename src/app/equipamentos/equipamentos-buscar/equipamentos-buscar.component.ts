import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/componentes/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { EquipamentosService } from '../equipamentos.service';

@Component({
  selector: 'app-equipamentos-buscar',
  templateUrl: './equipamentos-buscar.component.html',
  styleUrl: './equipamentos-buscar.component.scss'
})
export class EquipamentosBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome',
    'localizacao',
    'tipo',
    'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome',
    'Localização',
    'Tipo',
    'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: EquipamentosService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  } 
}
