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


@NgModule({
  declarations: [
    EquipamentosMenuComponent,
    EquipamentosComponent,
    EquipamentosAdicionarComponent,
    EquipamentosEditarComponent,
    EquipamentosBuscarComponent,
    EquipamentosDetalhesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    EquipamentosRoutingModule
  ]
})
export class EquipamentosModule { }
