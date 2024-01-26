import { Component, OnInit } from '@angular/core';
import { UsuarioSessaoService } from '../../compartilhado/services/usuario-sessao/usuario-sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-configuracoes-usuario',
  templateUrl: './configuracoes-usuario.component.html',
  styleUrl: './configuracoes-usuario.component.scss'
})
export class ConfiguracoesUsuarioComponent extends NexusFormulario implements OnInit {
  
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: UsuarioSessaoService,
    private usuarioService: UsuariosService
    ) {
      super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
        snackBar, usuarioSessaoService);

      this.formulario = this.formBuilder.group({
        nome: [''],
        descricao: [''],
        nomeAcesso: ['']
      });
    }
    
  ngOnInit(): void {
    this.usuarioService.obterPorUID(this.usuarioSessaoService.uidUsuario)
      .pipe(take(1))
      .subscribe({
        next: usuario => {
          if (!usuario) {
            this.erroAoObterUsuario();
          }
  
          this.formulario.setValue({
            nome: usuario.nome,
            descricao: usuario.descricao,
            nomeAcesso: usuario.nomeAcesso
          })
        },
        error: error => {
          this.erroAoObterUsuario();
        }
      });
  }

  override onSubmit(): void {}

  erroAoObterUsuario() {
    this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
        
    this.router.navigate(['/login']);
    this.authService.sairDaConta();

    throw new Error('Um erro aconteceu.');
  }
}
