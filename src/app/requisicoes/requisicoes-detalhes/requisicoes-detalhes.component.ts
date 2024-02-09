import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { RequisicoesService } from '../requisicoes.service';

@Component({
  selector: 'app-requisicoes-detalhes',
  templateUrl: './requisicoes-detalhes.component.html',
  styleUrl: './requisicoes-detalhes.component.scss'
})
export class RequisicoesDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private service: RequisicoesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      coordenador: [''],
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
      next: (requisicao) => {
        if (!requisicao) {
          throwError(() => Error('Manutenção não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: requisicao.nome,
          descricao: requisicao.descricao,
          coordenador: requisicao.coordenador.nome,
          atualizadoPor: requisicao.atualizadoPor?.nome,
          dataUltimaAtualizacao: requisicao.dataUltimaAtualizacao,
          usuarioCriador: requisicao.usuarioCriador?.nome,
          dataCriacao: requisicao.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }
}
