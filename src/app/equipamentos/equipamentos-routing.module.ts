import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentosComponent } from './equipamentos.component';
import { conferirAutenticacao } from '../login/guard/guard';
import { EquipamentosMenuComponent } from './equipamentos-menu/equipamentos-menu.component';
import { EquipamentosAdicionarComponent } from './equipamentos-adicionar/equipamentos-adicionar.component';
import { EquipamentosBuscarComponent } from './equipamentos-buscar/equipamentos-buscar.component';
import { EquipamentosDetalhesComponent } from './equipamentos-detalhes/equipamentos-detalhes.component';
import { EquipamentosEditarComponent } from './equipamentos-editar/equipamentos-editar.component';

const routes: Routes = [
  { path: 'ativos/equipamentos', component: EquipamentosComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: EquipamentosMenuComponent },
    { path: 'adicionar', component: EquipamentosAdicionarComponent },
    { path: 'buscar', component: EquipamentosBuscarComponent },
    { path: 'detalhes/:uid', component: EquipamentosDetalhesComponent },
    { path: 'editar/:uid', component: EquipamentosEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
