import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { EquipamentosService } from '../../equipamentos/equipamentos.service';
import { SoftwaresService } from '../softwares.service';

@Component({
  selector: 'app-softwares-buscar',
  templateUrl: './softwares-buscar.component.html',
  styleUrl: './softwares-buscar.component.scss'
})
export class SoftwaresBuscarComponent extends NexusBuscar {

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
    service: SoftwaresService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  } 
}
