import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioEnvio } from './models/usuario-envio';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { NexusFormulario } from '../compartilhado/models/nexus-formulario';
import { Subscription, take, takeUntil, takeWhile } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'nexus-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends NexusFormulario implements OnDestroy {

  private inscricaoAuth: Subscription = new Subscription();

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute)
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })

    //desiscreve depois de 2 porque, assim, retornará o resultado para a toolbar 
    //e para sidenav
    this.inscricaoAuth = authService.usuarioAutenticado$
      .subscribe(usuarioAutenticado => {
        if (usuarioAutenticado == true) {
          router.navigate(['ativos']) 
        }
        else if (usuarioAutenticado == false) {
          snackBar.open('Credenciais incorretas!', 'Ok')._dismissAfter(3000);
          this.formulario.reset();
        }
        else {
          snackBar.open('Um erro inesperado aconteceu.', 'Ok')._dismissAfter(3000);
          this.formulario.reset();
        }
      });
  }
  
  override onSubmit(): void {
    const usuario: UsuarioEnvio = new UsuarioEnvio()
    usuario.nomeAcesso = this.formulario.get('usuario')?.value
    usuario.senha = this.formulario.get('senha')?.value
    
    this.authService.fazerLogin(usuario)
  }

  ngOnDestroy(): void {
    this.inscricaoAuth.unsubscribe();
  }
}
