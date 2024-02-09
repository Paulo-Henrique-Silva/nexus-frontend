import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { AdministracaoComponent } from './administracao.component';
import { AdministracaoUsuariosBuscarComponent } from './administracao-usuarios-buscar/administracao-usuarios-buscar.component';
import { AdministracaoUsuariosAdicionarComponent } from './administracao-usuarios-adicionar/administracao-usuarios-adicionar.component';
import { AdministracaoUsuariosEditarComponent } from './administracao-usuarios-editar/administracao-usuarios-editar.component';
import { AdministracaoUsuariosGerenciarPerfisComponent } from './administracao-usuarios-gerenciar-perfis/administracao-usuarios-gerenciar-perfis.component';
import { AdministracaoProjetosBuscarComponent } from './administracao-projetos-buscar/administracao-projetos-buscar.component';
import { AdministracaoProjetosAdicionarComponent } from './administracao-projetos-adicionar/administracao-projetos-adicionar.component';
import { AdministracaoProjetosEditarComponent } from './administracao-projetos-editar/administracao-projetos-editar.component';

@NgModule({
  declarations: [
    AdministracaoMenuComponent,
    AdministracaoComponent,
    AdministracaoUsuariosBuscarComponent,
    AdministracaoUsuariosAdicionarComponent,
    AdministracaoUsuariosEditarComponent,
    AdministracaoUsuariosGerenciarPerfisComponent,
    AdministracaoProjetosBuscarComponent,
    AdministracaoProjetosAdicionarComponent,
    AdministracaoProjetosEditarComponent,
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    AdministracaoRoutingModule
  ]
})
export class AdministracaoModule { }
