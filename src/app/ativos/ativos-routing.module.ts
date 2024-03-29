import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosComponent } from './ativos.component';
import { conferirAutenticacao } from '../login/guard/base-guard';
import { AtivosListaComponent } from './ativos-lista/ativos-lista.component';

const routes: Routes = [
  { path: 'ativos', component: AtivosComponent, canActivate:[conferirAutenticacao], children: [
    { path: '', component: AtivosListaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }
