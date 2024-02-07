import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwaresRoutingModule } from './softwares-routing.module';
import { SoftwaresMenuComponent } from './softwares-menu/softwares-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { SoftwaresComponent } from './softwares.component';
import { SoftwaresAdicionarComponent } from './softwares-adicionar/softwares-adicionar.component';
import { SoftwaresAcoesComponent } from './softwares-acoes/softwares-acoes.component';
import { SoftwaresEditarComponent } from './softwares-editar/softwares-editar.component';
import { SoftwaresDetalhesComponent } from './softwares-detalhes/softwares-detalhes.component';
import { SoftwaresBuscarComponent } from './softwares-buscar/softwares-buscar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SoftwaresMenuComponent,
    SoftwaresComponent,
    SoftwaresAdicionarComponent,
    SoftwaresAcoesComponent,
    SoftwaresEditarComponent,
    SoftwaresDetalhesComponent,
    SoftwaresBuscarComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    SoftwaresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SoftwaresModule { }
