import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';

@Component({
  selector: 'app-usuarios-buscar',
  templateUrl: './usuarios-buscar.component.html',
  styleUrl: './usuarios-buscar.component.scss'
})
export class UsuariosBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome', 'nomeAcesso', 'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome', 'Nome de Acesso', 'Atualizado por', 'Data Última Atualização',
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
