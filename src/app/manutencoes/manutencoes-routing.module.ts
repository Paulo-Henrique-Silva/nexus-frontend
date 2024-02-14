import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutencoesComponent } from './manutencoes.component';
import { ManutencoesMenuComponent } from './manutencoes-menu/manutencoes-menu.component';
import { conferirAutenticacao } from '../login/guard/guard';
import { ManutencoesAdicionarComponent } from './manutencoes-adicionar/manutencoes-adicionar.component';
import { ManutencoesBuscarComponent } from './manutencoes-buscar/manutencoes-buscar.component';
import { ManutencoesDetalhesComponent } from './manutencoes-detalhes/manutencoes-detalhes.component';
import { ManutencoesEditarComponent } from './manutencoes-editar/manutencoes-editar.component';

const routes: Routes = [
  { path: 'ativos/manutencoes', component: ManutencoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: ManutencoesMenuComponent },
    { path: 'adicionar/:componente-uid', component: ManutencoesAdicionarComponent },
    { path: 'buscar', component: ManutencoesBuscarComponent },
    { path: 'detalhes/:uid', component: ManutencoesDetalhesComponent },
    { path: 'editar/:uid', component: ManutencoesEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutencoesRoutingModule { }
