import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacoesRoutingModule } from './notificacoes-routing.module';
import { NotificacoesComponent } from './notificacoes.component';
import { NotificacoesDetalhesComponent } from './notificacoes-detalhes/notificacoes-detalhes.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { NotificacoesCardComponent } from './notificacoes-card/notificacoes-card.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { NotificacoesBotaoVoltarComponent } from './notificacoes-botao-voltar/notificacoes-botao-voltar.component';


@NgModule({
  declarations: [
    NotificacoesComponent,
    NotificacoesDetalhesComponent,
    NotificacoesCardComponent,
    NotificacoesBotaoVoltarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompartilhadoModule,
    NotificacoesRoutingModule
  ]
})
export class NotificacoesModule { }
