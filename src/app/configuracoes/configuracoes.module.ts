import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { ConfiguracoesComponent } from './configuracoes.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario/configuracoes-usuario.component';
import { ConfiguracoesPerfilComponent } from './configuracoes-perfil/configuracoes-perfil.component';
import { ConfiguracoesEditarSenhaComponent } from './configuracoes-editar-senha/configuracoes-editar-senha.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguracoesBotaoVoltarComponent } from './configuracoes-botao-voltar/configuracoes-botao-voltar.component';


@NgModule({
  declarations: [
    ConfiguracoesComponent,
    ConfiguracoesUsuarioComponent,
    ConfiguracoesPerfilComponent,
    ConfiguracoesEditarSenhaComponent,
    ConfiguracoesBotaoVoltarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    FormsModule,
    ReactiveFormsModule,
    ConfiguracoesRoutingModule
  ]
})
export class ConfiguracoesModule { }
