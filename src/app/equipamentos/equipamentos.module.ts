import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosMenuComponent } from './equipamentos-menu/equipamentos-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { EquipamentosComponent } from './equipamentos.component';
import { EquipamentosAdicionarComponent } from './equipamentos-adicionar/equipamentos-adicionar.component';
import { EquipamentosEditarComponent } from './equipamentos-editar/equipamentos-editar.component';
import { EquipamentosBuscarComponent } from './equipamentos-buscar/equipamentos-buscar.component';
import { EquipamentosDetalhesComponent } from './equipamentos-detalhes/equipamentos-detalhes.component';
import { EquipamentosAcoesComponent } from './equipamentos-acoes/equipamentos-acoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipamentosMenuComponent,
    EquipamentosComponent,
    EquipamentosAdicionarComponent,
    EquipamentosEditarComponent,
    EquipamentosBuscarComponent,
    EquipamentosDetalhesComponent,
    EquipamentosAcoesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    EquipamentosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipamentosModule { }
