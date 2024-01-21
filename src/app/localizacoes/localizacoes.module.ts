import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacoesRoutingModule } from './localizacoes-routing.module';
import { LocalizacoesComponent } from './localizacoes.component';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';


@NgModule({
  declarations: [
    LocalizacoesComponent,
    LocalizacoesMenuComponent
  ],
  imports: [
    CommonModule,
    LocalizacoesRoutingModule
  ]
})
export class LocalizacoesModule { }
