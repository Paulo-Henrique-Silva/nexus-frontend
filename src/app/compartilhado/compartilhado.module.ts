import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from './botao-menu/botao-menu.component';
import { AtivosOpcoesComponent } from './ativos-opcoes/ativos-opcoes.component';
import { AtivosVoltarComponent } from './ativos-voltar/ativos-voltar.component';



@NgModule({
  declarations: [
    BotaoVoltarComponent,
    BotaoMenuComponent,
    AtivosOpcoesComponent,
    AtivosVoltarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    BotaoVoltarComponent,
    BotaoMenuComponent,
    AtivosOpcoesComponent,
    AtivosVoltarComponent
  ]
})
export class CompartilhadoModule { }
