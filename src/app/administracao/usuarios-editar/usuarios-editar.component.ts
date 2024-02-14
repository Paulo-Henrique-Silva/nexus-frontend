import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuarioEnvio } from '../../login/models/usuario-envio';
import { UsuariosService } from '../../login/usuarios.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrl: './usuarios-editar.component.scss'
})
export class UsuariosEditarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    dialog: MatDialog,
    private service: UsuariosService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      nomeAcesso: ['', [Validators.required, Validators.maxLength(200)]],
    })

  }

  ngOnInit() {
    const uid = this.activatedRoute.snapshot.params['uid'];
    this.carregando = true;

    this.service.obterPorUID(uid)
    .subscribe({
      next: (usuario) => {
        if (!usuario) {
          throw new Error('Objeto não existe.');
        }
    
        this.formulario.setValue({
          nome: usuario.nome,
          descricao: usuario.descricao,
          nomeAcesso: usuario.nomeAcesso,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });

  }
  
  override onSubmit(): void {
    this.formularioEnviado = true;
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const nomeAcesso: string = this.formulario.get('nomeAcesso')?.value;

    const usuario: UsuarioEnvio = {
      nome: nome,
      descricao: descricao,
      nomeAcesso: nomeAcesso,
      senha: ''
    };
    
    this.service.editar(uid, usuario)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Usuário editado com sucesso!');
          this.router.navigate(['/ativos/administracao']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }

}
