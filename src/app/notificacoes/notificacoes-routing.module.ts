import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacoesComponent } from './notificacoes.component';
import { NotificacoesDetalhesComponent } from './notificacoes-detalhes/notificacoes-detalhes.component';
import { conferirAutenticacao } from '../login/guard/guard';

const routes: Routes = [
  { path: 'notificacoes', component: NotificacoesComponent,  canActivate:[conferirAutenticacao], 
  children: [
    { path: ':uid', component: NotificacoesDetalhesComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacoesRoutingModule { }
