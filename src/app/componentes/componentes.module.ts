import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesMenuComponent } from './componentes-menu/componentes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { ComponentesComponent } from './componentes.component';
import { ComponentesBuscarComponent } from './componentes-buscar/componentes-buscar.component';
import { ComponentesAdicionarComponent } from './componentes-adicionar/componentes-adicionar.component';
import { ComponentesEditarComponent } from './componentes-editar/componentes-editar.component';
import { ComponentesDetalhesComponent } from './componentes-detalhes/componentes-detalhes.component';
import { ComponentesAcoesComponent } from './componentes-acoes/componentes-acoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComponentesMenuComponent,
    ComponentesComponent,
    ComponentesBuscarComponent,
    ComponentesAdicionarComponent,
    ComponentesEditarComponent,
    ComponentesDetalhesComponent,
    ComponentesAcoesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    ComponentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentesModule { }
