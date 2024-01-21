import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { ComponentesMenuComponent } from './componentes-menu/componentes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { ComponentesComponent } from './componentes.component';


@NgModule({
  declarations: [
    ComponentesMenuComponent,
    ComponentesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
