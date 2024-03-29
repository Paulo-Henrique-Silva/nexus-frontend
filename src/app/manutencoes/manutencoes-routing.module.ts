import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutencoesComponent } from './manutencoes.component';
import { ManutencoesMenuComponent } from './manutencoes-menu/manutencoes-menu.component';
import { conferirAutenticacao, sairFormulario } from '../login/guard/base-guard';
import { ManutencoesAdicionarComponent } from './manutencoes-adicionar/manutencoes-adicionar.component';
import { ManutencoesBuscarComponent } from './manutencoes-buscar/manutencoes-buscar.component';
import { ManutencoesDetalhesComponent } from './manutencoes-detalhes/manutencoes-detalhes.component';
import { ManutencoesEditarComponent } from './manutencoes-editar/manutencoes-editar.component';
import { conferirManutencaoAdicionar, conferirManutencaoEditar } from '../login/guard/manutencao-guard';

const routes: Routes = [
  { path: 'ativos/manutencoes', component: ManutencoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: ManutencoesMenuComponent },
    { path: 'adicionar/:componente-uid', canActivate:[conferirManutencaoAdicionar], canDeactivate:[sairFormulario], component: ManutencoesAdicionarComponent },
    { path: 'buscar', component: ManutencoesBuscarComponent },
    { path: 'detalhes/:uid', component: ManutencoesDetalhesComponent },
    { path: 'editar/:uid', canActivate:[conferirManutencaoEditar], canDeactivate:[sairFormulario], component: ManutencoesEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
