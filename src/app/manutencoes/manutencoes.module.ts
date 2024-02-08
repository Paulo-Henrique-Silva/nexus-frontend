import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { ManutencoesMenuComponent } from './manutencoes-menu/manutencoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { ManutencoesComponent } from './manutencoes.component';
import { ManutencoesAcoesComponent } from './manutencoes-acoes/manutencoes-acoes.component';
import { ManutencoesEditarComponent } from './manutencoes-editar/manutencoes-editar.component';
import { ManutencoesAdicionarComponent } from './manutencoes-adicionar/manutencoes-adicionar.component';
import { ManutencoesBuscarComponent } from './manutencoes-buscar/manutencoes-buscar.component';
import { ManutencoesDetalhesComponent } from './manutencoes-detalhes/manutencoes-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManutencoesMenuComponent,
    ManutencoesComponent,
    ManutencoesAcoesComponent,
    ManutencoesEditarComponent,
    ManutencoesAdicionarComponent,
    ManutencoesBuscarComponent,
    ManutencoesDetalhesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    ManutencoesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManutencoesModule { }
