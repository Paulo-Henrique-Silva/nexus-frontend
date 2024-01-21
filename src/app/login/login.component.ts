import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioEnvio } from './usuario-envio';
import { Router } from '@angular/router';
import { MensagensValidacaoService } from '../compartilhado/services/mensagens-validacao/mensagens-validacao.service';

@Component({
  selector: 'nexus-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formulario: FormGroup = this.formBuilder.group({
    usuario: [null, Validators.required],
    senha: [null, Validators.required]
  })

  constructor(
    private authService : AuthService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private mensagemValidacaoService: MensagensValidacaoService
  ) {}

  onSubmit(): void {
    const usuario: UsuarioEnvio = new UsuarioEnvio()
    usuario.nomeAcesso = this.formulario.get('usuario')?.value
    usuario.senha = this.formulario.get('senha')?.value

    this.authService.fazerLogin(usuario)
    this.router.navigate(['']);
  }

  campoInvalido(nomeCampo: string): boolean {
    const campo = this.formulario.get(nomeCampo)

    if (!campo) {
      return false
    }

    return campo.invalid
  }

  obterMensagem(nomeCampo: string): string {
    const campo = this.formulario.get(nomeCampo)

    //se o campo não existe, retorna nada.
    if (!campo) {
      return ''
    }

    return this.mensagemValidacaoService.obterMensagem(campo)
  }
}
