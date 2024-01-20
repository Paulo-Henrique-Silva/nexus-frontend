import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacoesComponent } from './notificacoes.component';
import { NotificacoesDetalhesComponent } from './notificacoes-detalhes/notificacoes-detalhes.component';

const routes: Routes = [
  { path: 'notificacoes', component: NotificacoesComponent, children: [
    { path: ':uid', component: NotificacoesDetalhesComponent} 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacoesRoutingModule { }
