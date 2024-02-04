import { Component } from '@angular/core';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../componentes.service';

@Component({
  selector: 'app-componentes-buscar',
  templateUrl: './componentes-buscar.component.html',
  styleUrl: './componentes-buscar.component.scss'
})
export class ComponentesBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome',
    'numeroSerie',
    'localizacao',
    'status',
    'tipo',
    'marca',
    'modelo',
    'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome',
    'Número de Série',
    'Localização',
    'Status',
    'Tipo',
    'Marca',
    'Modelo',
    'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: ComponentesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}
