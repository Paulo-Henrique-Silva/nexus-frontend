import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-detalhes',
  templateUrl: './usuarios-detalhes.component.html',
  styleUrl: './usuarios-detalhes.component.scss'
})
export class UsuariosDetalhesComponent extends NexusFormulario {
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
      nome: [''],
      descricao: [''],
      nomeAcesso: [''],
      atualizadoPor: [''],
      dataUltimaAtualizacao: [''],
      usuarioCriador: [''],
      dataCriacao: ['']
    });
  }

  ngOnInit() {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (usuario) => {
        if (!usuario) {
          throwError(() => Error('Objeto não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: usuario.nome,
          descricao: usuario.descricao,
          nomeAcesso: usuario.nomeAcesso,
          atualizadoPor: usuario.atualizadoPor?.nome,
          dataUltimaAtualizacao: usuario.dataUltimaAtualizacao,
          usuarioCriador: usuario.usuarioCriador?.nome,
          dataCriacao: usuario.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }

}
