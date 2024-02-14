import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizacoesComponent } from './localizacoes.component';
import { conferirAutenticacao, sairFormulario } from '../login/guard/base-guard';
import { LocalizacoesMenuComponent } from './localizacoes-menu/localizacoes-menu.component';
import { LocalizacoesAdicionarComponent } from './localizacoes-adicionar/localizacoes-adicionar.component';
import { LocalizacoesBuscarComponent } from './localizacoes-buscar/localizacoes-buscar.component';
import { LocalizacoesDetalhesComponent } from './localizacoes-detalhes/localizacoes-detalhes.component';
import { LocalizacoesEditarComponent } from './localizacoes-editar/localizacoes-editar.component';
import { conferirLocalizacaoAdicionar, conferirLocalizacaoEditar } from '../login/guard/localizacao-guard';

const routes: Routes = [
  { path: 'ativos/localizacoes', component: LocalizacoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: LocalizacoesMenuComponent },
    { path: 'adicionar', canActivate:[conferirLocalizacaoAdicionar], canDeactivate:[sairFormulario], component: LocalizacoesAdicionarComponent },
    { path: 'buscar', component: LocalizacoesBuscarComponent },
    { path: 'detalhes/:uid', component: LocalizacoesDetalhesComponent },
    { path: 'editar/:uid', canActivate:[conferirLocalizacaoEditar], canDeactivate:[sairFormulario], component: LocalizacoesEditarComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizacoesRoutingModule { }
