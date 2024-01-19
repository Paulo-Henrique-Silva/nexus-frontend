import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtribuicoesRoutingModule } from './atribuicoes-routing.module';
import { AtribuicoesComponent } from './atribuicoes.component';
import { AtribuicoesListaComponent } from './atribuicoes-lista/atribuicoes-lista.component';
import { AtribuicoesDetalhesComponent } from './atribuicoes-detalhes/atribuicoes-detalhes.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';


@NgModule({
  declarations: [
    AtribuicoesComponent,
    AtribuicoesListaComponent,
    AtribuicoesDetalhesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    AtribuicoesRoutingModule
  ]
})
export class AtribuicoesModule { }
