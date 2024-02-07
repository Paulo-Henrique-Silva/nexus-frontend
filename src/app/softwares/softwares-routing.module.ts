import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwaresMenuComponent } from './softwares-menu/softwares-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';
import { SoftwaresComponent } from './softwares.component';
import { SoftwaresAdicionarComponent } from './softwares-adicionar/softwares-adicionar.component';
import { SoftwaresBuscarComponent } from './softwares-buscar/softwares-buscar.component';
import { SoftwaresDetalhesComponent } from './softwares-detalhes/softwares-detalhes.component';
import { SoftwaresEditarComponent } from './softwares-editar/softwares-editar.component';

const routes: Routes = [
  { path: 'ativos/softwares', component: SoftwaresComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: SoftwaresMenuComponent },
    { path: 'adicionar', component: SoftwaresAdicionarComponent },
    { path: 'buscar', component: SoftwaresBuscarComponent },
    { path: 'detalhes/:uid', component: SoftwaresDetalhesComponent },
    { path: 'editar/:uid', component: SoftwaresEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaresRoutingModule { }
