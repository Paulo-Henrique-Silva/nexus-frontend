import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtribuicoesRoutingModule } from './atribuicoes-routing.module';
import { AtribuicoesComponent } from './atribuicoes.component';
import { AtribuicoesListaComponent } from './atribuicoes-lista/atribuicoes-lista.component';
import { AtribuicoesDetalhesComponent } from './atribuicoes-detalhes/atribuicoes-detalhes.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { AtribuicoesAcoesComponent } from './atribuicoes-acoes/atribuicoes-acoes.component';
import { AtribuicoesCardComponent } from './atribuicoes-card/atribuicoes-card.component';


@NgModule({
  declarations: [
    AtribuicoesComponent,
    AtribuicoesListaComponent,
    AtribuicoesDetalhesComponent,
    AtribuicoesAcoesComponent,
    AtribuicoesCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    AtribuicoesRoutingModule
  ]
})
export class AtribuicoesModule { }
