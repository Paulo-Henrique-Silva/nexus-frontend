import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtribuicoesAcoesCompletarManutencaoComponent } from './atribuicoes-acoes-completar-manutencao/atribuicoes-acoes-completar-manutencao.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { RouterModule } from '@angular/router';
import { AtribuicoesBotaoVoltarComponent } from './atribuicoes-botao-voltar/atribuicoes-botao-voltar.component';

const components = [
  AtribuicoesAcoesCompletarManutencaoComponent
]

@NgModule({
  declarations: [
    components,
    AtribuicoesBotaoVoltarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    RouterModule,
  ],
  exports: [
    components
  ]
})
export class AtribuicoesAcoesModule { }
