import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacoesRoutingModule } from './localizacoes-routing.module';
import { LocalizacoesComponent } from './localizacoes.component';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { LocalizacoesAdicionarComponent } from './localizacoes-adicionar/localizacoes-adicionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizacoesBuscarComponent } from './localizacoes-buscar/localizacoes-buscar.component';
import { LocalizacoesAcoesComponent } from './localizacoes-acoes/localizacoes-acoes.component';
import { LocalizacoesDetalhesComponent } from './localizacoes-detalhes/localizacoes-detalhes.component';
import { LocalizacoesEditarComponent } from './localizacoes-editar/localizacoes-editar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LocalizacoesComponent,
    LocalizacoesMenuComponent,
    LocalizacoesAdicionarComponent,
    LocalizacoesBuscarComponent,
    LocalizacoesAcoesComponent,
    LocalizacoesDetalhesComponent,
    LocalizacoesEditarComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    HttpClientModule,
    LocalizacoesRoutingModule
  ]
})
export class LocalizacoesModule { }
