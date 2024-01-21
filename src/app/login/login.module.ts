import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../compartilhado/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
