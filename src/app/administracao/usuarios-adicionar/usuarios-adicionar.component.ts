import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { UsuarioEnvio } from '../../login/models/usuario-envio';

@Component({
  selector: 'app-usuarios-adicionar',
  templateUrl: './usuarios-adicionar.component.html',
  styleUrl: './usuarios-adicionar.component.scss'
})
export class UsuariosAdicionarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private service: UsuariosService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      nomeAcesso: ['', [Validators.required, Validators.maxLength(200)]],
      senha: ['', [Validators.required, Validators.maxLength(200)]],
    })
  }

  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const nomeAcesso: string = this.formulario.get('nomeAcesso')?.value;
    const senha: string = this.formulario.get('senha')?.value;

    const usuario: UsuarioEnvio = {
      nome: nome,
      descricao: descricao,
      nomeAcesso: nomeAcesso,
      senha: senha
    };
    
    this.service.adicionar(usuario)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Usuário adicionado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/administracao']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
  }
}
