import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracaoComponent } from './administracao.component';
import { AdministracaoMenuComponent } from './administracao-menu/administracao-menu.component';
import { conferirAutenticacao } from '../login/guard/login-guard';
import { UsuariosAdicionarComponent } from './usuarios-adicionar/usuarios-adicionar.component';
import { UsuariosBuscarComponent } from './usuarios-buscar/usuarios-buscar.component';
import { UsuariosDetalhesComponent } from './usuarios-detalhes/usuarios-detalhes.component';
import { UsuariosEditarComponent } from './usuarios-editar/usuarios-editar.component';
import { ProjetosAdicionarComponent } from './projetos-adicionar/projetos-adicionar.component';
import { ProjetosBuscarComponent } from './projetos-buscar/projetos-buscar.component';
import { ProjetosDetalhesComponent } from './projetos-detalhes/projetos-detalhes.component';
import { ProjetosEditarComponent } from './projetos-editar/projetos-editar.component';

const routes: Routes = [
  { path: 'ativos/administracao', component: AdministracaoComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', component: AdministracaoMenuComponent},
    
    //usuários
    { path: 'usuarios/adicionar', component: UsuariosAdicionarComponent },
    { path: 'usuarios/buscar', component: UsuariosBuscarComponent },
    { path: 'usuarios/detalhes/:uid', component: UsuariosDetalhesComponent },
    { path: 'usuarios/editar/:uid', component: UsuariosEditarComponent },

    //projetos
    { path: 'projetos/adicionar', component: ProjetosAdicionarComponent },
    { path: 'projetos/buscar', component: ProjetosBuscarComponent },
    { path: 'projetos/detalhes/:uid', component: ProjetosDetalhesComponent },
    { path: 'projetos/editar/:uid', component: ProjetosEditarComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
