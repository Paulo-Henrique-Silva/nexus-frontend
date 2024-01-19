import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtribuicoesRoutingModule } from './atribuicoes-routing.module';
import { AtribuicoesComponent } from './atribuicoes.component';


@NgModule({
  declarations: [
    AtribuicoesComponent
  ],
  imports: [
    CommonModule,
    AtribuicoesRoutingModule
  ]
})
export class AtribuicoesModule { }
