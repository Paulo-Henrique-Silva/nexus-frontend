import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicoesComponent } from './requisicoes.component';
import { conferirAutenticacao } from '../login/guard/guard';
import { RequisicoesMenuComponent } from './requisicoes-menu/requisicoes-menu.component';
import { RequisicoesAdicionarComponent } from './requisicoes-adicionar/requisicoes-adicionar.component';
import { RequisicoesBuscarComponent } from './requisicoes-buscar/requisicoes-buscar.component';
import { RequisicoesDetalhesComponent } from './requisicoes-detalhes/requisicoes-detalhes.component';
import { RequisicoesEditarComponent } from './requisicoes-editar/requisicoes-editar.component';

const routes: Routes = [
  { path: 'ativos/requisicoes', component: RequisicoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: RequisicoesMenuComponent },
    { path: 'adicionar', component: RequisicoesAdicionarComponent },
    { path: 'buscar', component: RequisicoesBuscarComponent },
    { path: 'detalhes/:uid', component: RequisicoesDetalhesComponent },
    { path: 'editar/:uid', component: RequisicoesEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicoesRoutingModule { }
