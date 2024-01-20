import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosRoutingModule } from './ativos-routing.module';
import { AtivosComponent } from './ativos.component';


@NgModule({
  declarations: [
    AtivosComponent
  ],
  imports: [
    CommonModule,
    AtivosRoutingModule
  ]
})
export class AtivosModule { }
