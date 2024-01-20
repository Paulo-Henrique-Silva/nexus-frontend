import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesEditarSenhaComponent } from './configuracoes-editar-senha/configuracoes-editar-senha.component';
import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario/configuracoes-usuario.component';
import { ConfiguracoesPerfilComponent } from './configuracoes-perfil/configuracoes-perfil.component';

const routes: Routes = [
  { path: 'configuracoes', component: ConfiguracoesComponent, children: [
    { path: 'perfil', component: ConfiguracoesPerfilComponent },
    { path: 'usuario-detalhes', component: ConfiguracoesUsuarioComponent },
    { path: 'editar-senha', component: ConfiguracoesEditarSenhaComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
