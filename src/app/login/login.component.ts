import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioEnvio } from './usuario-envio';
import { Router } from '@angular/router';

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
  ) {}

  onSubmit(): void {
    const usuario: UsuarioEnvio = new UsuarioEnvio()
    usuario.nomeAcesso = this.formulario.get('usuario')?.value
    usuario.senha = this.formulario.get('senha')?.value

    this.authService.fazerLogin(usuario)
    this.router.navigate(['']);
  }
}
