import { Component, OnInit } from '@angular/core';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, take } from 'rxjs';

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
    usuarioSessaoService: SessaoService,
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
    this.carregando = true;

    this.usuarioService.obterPorUID(this.sessaoService.uidUsuario)
      .subscribe({
        next: usuario => {
          this.formulario.setValue({
            nome: usuario.nome,
            descricao: usuario.descricao,
            nomeAcesso: usuario.nomeAcesso
          });

          this.carregando = false;
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
          this.carregando = false;
        }
      });
  }

  override onSubmit(): void {}
}
