import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwaresMenuComponent } from './softwares-menu/softwares-menu.component';
import { conferirAutenticacao, sairFormulario } from '../login/guard/base-guard';
import { SoftwaresComponent } from './softwares.component';
import { SoftwaresAdicionarComponent } from './softwares-adicionar/softwares-adicionar.component';
import { SoftwaresBuscarComponent } from './softwares-buscar/softwares-buscar.component';
import { SoftwaresDetalhesComponent } from './softwares-detalhes/softwares-detalhes.component';
import { SoftwaresEditarComponent } from './softwares-editar/softwares-editar.component';
import { conferirSoftwareAdicionar, conferirSoftwareEditar } from '../login/guard/software-guard';

const routes: Routes = [
  { path: 'ativos/softwares', component: SoftwaresComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: SoftwaresMenuComponent },
    { path: 'adicionar/:componente-uid', canActivate:[conferirSoftwareAdicionar], canDeactivate:[sairFormulario], component: SoftwaresAdicionarComponent },
    { path: 'buscar', component: SoftwaresBuscarComponent },
    { path: 'detalhes/:uid', component: SoftwaresDetalhesComponent },
    { path: 'editar/:uid', canActivate:[conferirSoftwareEditar], canDeactivate:[sairFormulario], component: SoftwaresEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaresRoutingModule { }
