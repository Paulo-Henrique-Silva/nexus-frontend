import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AtribuicoesRoutingModule } from './atribuicoes-routing.module';
import { AtribuicoesComponent } from './atribuicoes.component';
import { AtribuicoesListaComponent } from './atribuicoes-lista/atribuicoes-lista.component';
import { AtribuicoesDetalhesComponent } from './atribuicoes-detalhes/atribuicoes-detalhes.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { AtribuicoesCardComponent } from './atribuicoes-card/atribuicoes-card.component';
import { AtribuicoesAcoesModule } from '../atribuicoes-acoes/atribuicoes-acoes.module';

@NgModule({
  declarations: [
    AtribuicoesComponent,
    AtribuicoesListaComponent,
    AtribuicoesDetalhesComponent,
    AtribuicoesCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    AtribuicoesRoutingModule,
    AtribuicoesAcoesModule
  ]
})
export class AtribuicoesModule { }
