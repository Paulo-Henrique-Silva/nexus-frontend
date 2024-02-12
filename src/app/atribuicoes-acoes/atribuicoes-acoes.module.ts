import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtribuicoesAcoesCompletarManutencaoComponent } from './atribuicoes-acoes-completar-manutencao/atribuicoes-acoes-completar-manutencao.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

const components = [
  AtribuicoesAcoesCompletarManutencaoComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule
  ],
  exports: [
    components
  ]
})
export class AtribuicoesAcoesModule { }
