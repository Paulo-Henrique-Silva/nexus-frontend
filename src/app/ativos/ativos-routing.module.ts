import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosComponent } from './ativos.component';
import { canActivate } from '../login/guard/login-guard';

const routes: Routes = [
  { path: '', component: AtivosComponent, canActivate:[canActivate] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }
