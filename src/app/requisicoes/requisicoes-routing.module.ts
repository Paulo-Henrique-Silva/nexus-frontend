import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicoesComponent } from './requisicoes.component';
import { conferirAutenticacao, sairFormulario } from '../login/guard/base-guard';
import { RequisicoesMenuComponent } from './requisicoes-menu/requisicoes-menu.component';
import { RequisicoesAdicionarComponent } from './requisicoes-adicionar/requisicoes-adicionar.component';
import { RequisicoesBuscarComponent } from './requisicoes-buscar/requisicoes-buscar.component';
import { RequisicoesDetalhesComponent } from './requisicoes-detalhes/requisicoes-detalhes.component';
import { RequisicoesEditarComponent } from './requisicoes-editar/requisicoes-editar.component';
import { conferirRequisicaoAdicionar, conferirRequisicaoEditar } from '../login/guard/requisicao-guard';

const routes: Routes = [
  { path: 'ativos/requisicoes', component: RequisicoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: RequisicoesMenuComponent },
    { path: 'adicionar', canActivate:[conferirRequisicaoAdicionar], canDeactivate:[sairFormulario], component: RequisicoesAdicionarComponent },
    { path: 'buscar', component: RequisicoesBuscarComponent },
    { path: 'detalhes/:uid', component: RequisicoesDetalhesComponent },
    { path: 'editar/:uid', canActivate:[conferirRequisicaoEditar], canDeactivate:[sairFormulario], component: RequisicoesEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequisicoesRoutingModule { }
