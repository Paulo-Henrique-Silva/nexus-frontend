import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './ativos.component';
import { AtivosListaComponent } from './ativos-lista/ativos-lista.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { AtivosCardComponent } from './ativos-card/ativos-card.component';


@NgModule({
  declarations: [
    AtivosComponent,
    AtivosListaComponent,
    AtivosCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AtivosRoutingModule
  ]
})
export class AtivosModule { }
