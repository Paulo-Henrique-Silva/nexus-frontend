import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { LocalizacoesService } from '../localizacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-localizacoes-detalhes',
  templateUrl: './localizacoes-detalhes.component.html',
  styleUrl: './localizacoes-detalhes.component.scss'
})
export class LocalizacoesDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    dialog: MatDialog,
    private localizacaoService: LocalizacoesService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      atualizadoPor: [''],
      dataUltimaAtualizacao: [''],
      usuarioCriador: [''],
      dataCriacao: ['']
    });
  }

  ngOnInit() {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.localizacaoService.obterPorUID(uid)
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
