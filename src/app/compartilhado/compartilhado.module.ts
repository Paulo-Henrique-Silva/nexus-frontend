import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from './botao-menu/botao-menu.component';



@NgModule({
  declarations: [
    BotaoVoltarComponent,
    BotaoMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    BotaoVoltarComponent,
    BotaoMenuComponent
  ]
})
export class CompartilhadoModule { }
