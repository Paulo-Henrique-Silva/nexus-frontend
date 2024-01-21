import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { AdministracaoComponent } from './administracao.component';


@NgModule({
  declarations: [
    AdministracaoMenuComponent,
    AdministracaoComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    AdministracaoRoutingModule
  ]
})
export class AdministracaoModule { }
