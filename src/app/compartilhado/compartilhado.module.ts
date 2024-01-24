import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from './botao-menu/botao-menu.component';
import { AtivosOpcoesComponent } from './ativos-opcoes/ativos-opcoes.component';
import { AtivosVoltarComponent } from './ativos-voltar/ativos-voltar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogDeletarComponent } from './dialog-deletar/dialog-deletar.component';

@NgModule({
  declarations: [
    BotaoVoltarComponent,
    BotaoMenuComponent,
    AtivosOpcoesComponent,
    AtivosVoltarComponent,
    DialogDeletarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BotaoVoltarComponent,
    BotaoMenuComponent,
    AtivosOpcoesComponent,
    AtivosVoltarComponent,
  ]
})
export class CompartilhadoModule { }
