import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisicoesRoutingModule } from './requisicoes-routing.module';
import { RequisicoesMenuComponent } from './requisicoes-menu/requisicoes-menu.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MaterialModule } from '../compartilhado/material/material.module';
import { RequisicoesComponent } from './requisicoes.component';
import { RequisicoesAdicionarComponent } from './requisicoes-adicionar/requisicoes-adicionar.component';
import { RequisicoesBuscarComponent } from './requisicoes-buscar/requisicoes-buscar.component';
import { RequisicoesDetalhesComponent } from './requisicoes-detalhes/requisicoes-detalhes.component';
import { RequisicoesEditarComponent } from './requisicoes-editar/requisicoes-editar.component';
import { RequisicoesAcoesComponent } from './requisicoes-acoes/requisicoes-acoes.component';


@NgModule({
  declarations: [
    RequisicoesMenuComponent,
    RequisicoesComponent,
    RequisicoesAdicionarComponent,
    RequisicoesBuscarComponent,
    RequisicoesDetalhesComponent,
    RequisicoesEditarComponent,
    RequisicoesAcoesComponent
  ],
  imports: [
    CommonModule,
    CompartilhadoModule,
    MaterialModule,
    RequisicoesRoutingModule
  ]
})
export class RequisicoesModule { }
