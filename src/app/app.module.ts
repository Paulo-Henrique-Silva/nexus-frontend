import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './compartilhado/material/material.module';
import { AtivosModule } from './ativos/ativos.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { AtribuicoesModule } from './atribuicoes/atribuicoes.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { LoginModule } from './login/login.module';
import { AdministracaoModule } from './administracao/administracao.module';
import { ComponentesModule } from './componentes/componentes.module';
import { EquipamentosModule } from './equipamentos/equipamentos.module';
import { LocalizacoesModule } from './localizacoes/localizacoes.module';
import { ManutencoesModule } from './manutencoes/manutencoes.module';
import { RequisicoesModule } from './requisicoes/requisicoes.module';
import { SoftwaresModule } from './softwares/softwares.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AtivosModule,
    AtribuicoesModule,
    ConfiguracoesModule,
    NotificacoesModule,
    CompartilhadoModule,
    LoginModule,
    AdministracaoModule,
    ComponentesModule,
    EquipamentosModule,
    LocalizacoesModule,
    ManutencoesModule,
    RequisicoesModule,
    SoftwaresModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }