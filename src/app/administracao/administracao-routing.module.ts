import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracaoComponent } from './administracao.component';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';

const routes: Routes = [
  { path: 'ativos/administracao', component: AdministracaoComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: AdministracaoMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
