import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacoesRoutingModule } from './localizacoes-routing.module';
import { LocalizacoesComponent } from './localizacoes.component';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';


@NgModule({
  declarations: [
    LocalizacoesComponent,
    LocalizacoesMenuComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    LocalizacoesRoutingModule
  ]
})
export class LocalizacoesModule { }
