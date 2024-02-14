import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes.component';
import { ComponentesMenuComponent } from './componentes-menu/componentes-menu.component';
import { conferirAutenticacao, sairFormulario } from '../login/guard/base-guard';
import { ComponentesAdicionarComponent } from './componentes-adicionar/componentes-adicionar.component';
import { ComponentesDetalhesComponent } from './componentes-detalhes/componentes-detalhes.component';
import { ComponentesEditarComponent } from './componentes-editar/componentes-editar.component';
import { ComponentesBuscarComponent } from './componentes-buscar/componentes-buscar.component';
import { conferirComponenteAdicionar, conferirComponenteEditar } from '../login/guard/componente-guard';

const routes: Routes = [
  { path: 'ativos/componentes', component: ComponentesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: ComponentesMenuComponent },
    { path: 'adicionar', canActivate:[conferirComponenteAdicionar], canDeactivate:[sairFormulario], component: ComponentesAdicionarComponent },
    { path: 'buscar', component: ComponentesBuscarComponent },
    { path: 'detalhes/:uid', component: ComponentesDetalhesComponent },
    { path: 'editar/:uid', canActivate:[conferirComponenteEditar], canDeactivate:[sairFormulario], component: ComponentesEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
