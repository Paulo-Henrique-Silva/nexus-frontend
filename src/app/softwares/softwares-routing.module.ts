import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwaresMenuComponent } from './softwares-menu/softwares-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';
import { SoftwaresComponent } from './softwares.component';

const routes: Routes = [
  { path: 'ativos/softwares', component: SoftwaresComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: SoftwaresMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaresRoutingModule { }
