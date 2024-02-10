import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { AdministracaoComponent } from './administracao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosBuscarComponent } from './usuarios-buscar/usuarios-buscar.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';
import { UsuariosAdicionarComponent } from './usuarios-adicionar/usuarios-adicionar.component';
import { UsuariosAcoesComponent } from './usuarios-acoes/usuarios-acoes.component';
import { UsuariosDetalhesComponent } from './usuarios-detalhes/usuarios-detalhes.component';
import { ProjetosDetalhesComponent } from './projetos-detalhes/projetos-detalhes.component';
import { ProjetosEditarComponent } from './projetos-editar/projetos-editar.component';
import { ProjetosAdicionarComponent } from './projetos-adicionar/projetos-adicionar.component';
import { ProjetosAcoesComponent } from './projetos-acoes/projetos-acoes.component';
import { ProjetosBuscarComponent } from './projetos-buscar/projetos-buscar.component';
import { UsuariosGerenciarPerfisComponent } from './usuarios-gerenciar-perfis/usuarios-gerenciar-perfis.component';

@NgModule({
  declarations: [
    AdministracaoMenuComponent,
    AdministracaoComponent,
    UsuariosBuscarComponent,
    UsuariosEditarComponent,
    UsuariosAdicionarComponent,
    UsuariosAcoesComponent,
    UsuariosDetalhesComponent,
    ProjetosDetalhesComponent,
    ProjetosEditarComponent,
    ProjetosAdicionarComponent,
    ProjetosAcoesComponent,
    ProjetosBuscarComponent,
    UsuariosGerenciarPerfisComponent,
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    AdministracaoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracaoModule { }
