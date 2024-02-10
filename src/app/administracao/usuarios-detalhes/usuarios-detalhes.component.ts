import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';

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
    private service: UsuariosService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

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
      next: (localizacao) => {
        if (!localizacao) {
          throwError(() => Error('Localização não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: localizacao.nome,
          descricao: localizacao.descricao,
          atualizadoPor: localizacao.atualizadoPor?.nome,
          dataUltimaAtualizacao: localizacao.dataUltimaAtualizacao,
          usuarioCriador: localizacao.usuarioCriador?.nome,
          dataCriacao: localizacao.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }

}
