import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './compartilhado/material.module';
import { AtivosModule } from './ativos/ativos.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { AtribuicoesModule } from './atribuicoes/atribuicoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AtivosModule,
    AtribuicoesModule,
    ConfiguracoesModule,
    NotificacoesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
