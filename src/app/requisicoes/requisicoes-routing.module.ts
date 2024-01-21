import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicoesComponent } from './requisicoes.component';
import { RequisicoesMenuComponent } from './requisicoes-menu/requisicoes-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';

const routes: Routes = [
  { path: 'ativos/requisicoes', component: RequisicoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: RequisicoesMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicoesRoutingModule { }
