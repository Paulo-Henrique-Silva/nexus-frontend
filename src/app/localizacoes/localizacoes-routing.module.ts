import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacoesComponent } from './localizacoes.component';
import { conferirAutenticacao } from '../login/guard/login-guard';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';

const routes: Routes = [
  { path: 'ativos/localizacoes', component: LocalizacoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: LocalizacoesMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacoesRoutingModule { }
