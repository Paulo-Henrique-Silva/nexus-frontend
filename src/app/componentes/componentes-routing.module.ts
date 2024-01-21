import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes.component';
import { ComponentesMenuComponent } from './componentes-menu/componentes-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';

const routes: Routes = [
  { path: 'ativos/componentes', component: ComponentesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: ComponentesMenuComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
