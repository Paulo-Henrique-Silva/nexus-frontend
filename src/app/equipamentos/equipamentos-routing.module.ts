import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentosComponent } from './equipamentos.component';
import { conferirAutenticacao } from '../login/guard/login-guard';
import { EquipamentosMenuComponent } from './equipamentos-menu/equipamentos-menu.component';

const routes: Routes = [
  { path: 'ativos/equipamentos', component: EquipamentosComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: EquipamentosMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamentosRoutingModule { }
