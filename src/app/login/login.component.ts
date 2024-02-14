import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioEnvio } from './models/usuario-envio';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { NexusFormulario } from '../compartilhado/models/componentes/nexus-formulario';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../compartilhado/services/sessao/sessao.service';
import { MatDialog } from '@angular/material/dialog';

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
    snackBar: MatSnackBar,
    dialog: MatDialog,
    usuarioSessaoService: SessaoService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);

    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });

    //Executa após fazer o login.
    this.inscricaoAuth = authService.usuarioAutenticado$
      .subscribe(usuarioAutenticado => {
        if (usuarioAutenticado) {
          router.navigate(['ativos']) 
        }
        else {
          this.mostrarSnackBarOk('Credenciais incorretas!');
          this.formulario.reset();
        }
        
        this.carregando = false;
      });
  }
  
  override onSubmit(): void {
    const usuario: UsuarioEnvio = new UsuarioEnvio();
    usuario.nomeAcesso = this.formulario.get('usuario')?.value;
    usuario.senha = this.formulario.get('senha')?.value;
    
    this.authService.fazerLogin(usuario);
    this.carregando = true;
  }

  ngOnDestroy(): void {
    this.inscricaoAuth.unsubscribe();
  }
}
