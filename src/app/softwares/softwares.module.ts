import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwaresRoutingModule } from './softwares-routing.module';
import { SoftwaresMenuComponent } from './softwares-menu/softwares-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { SoftwaresComponent } from './softwares.component';


@NgModule({
  declarations: [
    SoftwaresMenuComponent,
    SoftwaresComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    SoftwaresRoutingModule
  ]
})
export class SoftwaresModule { }
