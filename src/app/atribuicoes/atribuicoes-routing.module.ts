import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtribuicoesComponent } from './atribuicoes.component';
import { AtribuicoesListaComponent } from './atribuicoes-lista/atribuicoes-lista.component';
import { AtribuicoesDetalhesComponent } from './atribuicoes-detalhes/atribuicoes-detalhes.component';
import { conferirAutenticacao } from '../login/guard/base-guard';
import { conferirAtribuicao } from '../login/guard/atribuicao-guard';

const routes: Routes = [
  { path: 'atribuicoes', component: AtribuicoesComponent, canActivate:[conferirAutenticacao, conferirAtribuicao], 
  children: [
    { path: '', component: AtribuicoesListaComponent },
    { path: ':uid', component: AtribuicoesDetalhesComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtribuicoesRoutingModule { }
