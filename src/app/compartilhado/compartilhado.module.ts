import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    BotaoVoltarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BotaoVoltarComponent
  ]
})
export class CompartilhadoModule { }
