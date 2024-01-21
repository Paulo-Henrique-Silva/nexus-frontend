import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutencoesComponent } from './manutencoes.component';
import { ManutencoesMenuComponent } from './manutencoes-menu/manutencoes-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';

const routes: Routes = [
  { path: 'ativos/manutencoes', component: ManutencoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: ManutencoesMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
