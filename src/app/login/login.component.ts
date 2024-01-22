import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioEnvio } from './usuario-envio';
import { Router } from '@angular/router';
import { MensagensValidacaoService } from '../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { NexusFormulario } from '../compartilhado/models/nexus-formulario';

@Component({
  selector: 'nexus-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService)
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  override onSubmit(): void {
    const usuario: UsuarioEnvio = new UsuarioEnvio()
    usuario.nomeAcesso = this.formulario.get('usuario')?.value
    usuario.senha = this.formulario.get('senha')?.value

    this.authService.fazerLogin(usuario)
    this.router.navigate(['ativos']);
  }
}
