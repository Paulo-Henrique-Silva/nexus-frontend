import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UsuarioPerfilService } from '../service/usuario-perfil.service';
import { UsuarioPerfilResposta } from '../model/usuario-perfil-resposta';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';

@Component({
  selector: 'app-configuracoes-perfil',
  templateUrl: './configuracoes-perfil.component.html',
  styleUrl: './configuracoes-perfil.component.scss'
})
export class ConfiguracoesPerfilComponent extends NexusFormulario implements OnInit {
  
  step: number = 0;
  usuarioPerfis: UsuarioPerfilResposta[] = []

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private usuarioPerfilService: UsuarioPerfilService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);

    this.formulario = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.usuarioPerfilService.obterTudoPorUsuarioUID(1, this.sessaoService.uidUsuario)
      .subscribe({
        next: (usuarioPerfis) => {
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      });
  }

  override onSubmit(): void {

  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
