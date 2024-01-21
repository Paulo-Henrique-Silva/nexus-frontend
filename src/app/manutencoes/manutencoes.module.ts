import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManutencoesRoutingModule } from './manutencoes-routing.module';
import { ManutencoesMenuComponent } from './manutencoes-menu/manutencoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { ManutencoesComponent } from './manutencoes.component';


@NgModule({
  declarations: [
    ManutencoesMenuComponent,
    ManutencoesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    ManutencoesRoutingModule
  ]
})
export class ManutencoesModule { }
