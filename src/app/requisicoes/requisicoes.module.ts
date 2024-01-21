import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisicoesRoutingModule } from './requisicoes-routing.module';
import { RequisicoesMenuComponent } from './requisicoes-menu/requisicoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { RequisicoesComponent } from './requisicoes.component';


@NgModule({
  declarations: [
    RequisicoesMenuComponent,
    RequisicoesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    RequisicoesRoutingModule
  ]
})
export class RequisicoesModule { }
