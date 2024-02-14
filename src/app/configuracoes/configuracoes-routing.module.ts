import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesEditarSenhaComponent } from './configuracoes-editar-senha/configuracoes-editar-senha.component';
import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario/configuracoes-usuario.component';
import { ConfiguracoesPerfilComponent } from './configuracoes-perfil/configuracoes-perfil.component';
import { conferirAutenticacao } from '../login/guard/guard';

const routes: Routes = [
  { path: 'configuracoes', component: ConfiguracoesComponent, canActivate:[conferirAutenticacao],
  children: [
    { path: '', redirectTo: 'usuario-detalhes', pathMatch: 'full' },
    { path: 'perfil', component: ConfiguracoesPerfilComponent },
    { path: 'usuario-detalhes', component: ConfiguracoesUsuarioComponent },
    { path: 'usuario-detalhes/editar-senha', component: ConfiguracoesEditarSenhaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
