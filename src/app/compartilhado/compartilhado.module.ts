import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BotaoMenuComponent } from './botao-menu/botao-menu.component';
import { AtivosOpcoesComponent } from './ativos-opcoes/ativos-opcoes.component';
import { AtivosVoltarComponent } from './ativos-voltar/ativos-voltar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BotaoVoltarComponent,
    BotaoMenuComponent,
    AtivosOpcoesComponent,
    AtivosVoltarComponent,
    FormularioComponent
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
    FormularioComponent
  ]
})
export class CompartilhadoModule { }
