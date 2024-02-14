import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { ManutencoesService } from '../manutencoes.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manutencoes-detalhes',
  templateUrl: './manutencoes-detalhes.component.html',
  styleUrl: './manutencoes-detalhes.component.scss'
})
export class ManutencoesDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    dialog: MatDialog,
    private service: ManutencoesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService, dialog);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      componente: [''],
      responsavel: [''],
      dataInicio: [''],
      dataTermino: [''],
      solucao: [''],
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
      next: (manutencao) => {
        if (!manutencao) {
          throwError(() => Error('Manutenção não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: manutencao.nome,
          descricao: manutencao.descricao,
          componente: manutencao.componente.nome,
          responsavel: manutencao.responsavel.nome,
          dataInicio: manutencao.dataInicio,
          dataTermino: manutencao.dataTermino,
          solucao: manutencao.solucao,
          atualizadoPor: manutencao.atualizadoPor?.nome,
          dataUltimaAtualizacao: manutencao.dataUltimaAtualizacao,
          usuarioCriador: manutencao.usuarioCriador?.nome,
          dataCriacao: manutencao.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }

}
