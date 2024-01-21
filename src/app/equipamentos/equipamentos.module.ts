import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { EquipamentosMenuComponent } from './equipamentos-menu/equipamentos-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { EquipamentosComponent } from './equipamentos.component';


@NgModule({
  declarations: [
    EquipamentosMenuComponent,
    EquipamentosComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    EquipamentosRoutingModule
  ]
})
export class EquipamentosModule { }
