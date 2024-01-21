import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacoesRoutingModule } from './localizacoes-routing.module';
import { LocalizacoesComponent } from './localizacoes.component';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { LocalizacoesAdicionarComponent } from './localizacoes-adicionar/localizacoes-adicionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocalizacoesComponent,
    LocalizacoesMenuComponent,
    LocalizacoesAdicionarComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizacoesRoutingModule
  ]
})
export class LocalizacoesModule { }
