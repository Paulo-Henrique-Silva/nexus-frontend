import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { SoftwaresService } from '../softwares.service';

@Component({
  selector: 'app-softwares-detalhes',
  templateUrl: './softwares-detalhes.component.html',
  styleUrl: './softwares-detalhes.component.scss'
})
export class SoftwaresDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private service: SoftwaresService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

    this.formulario = this.formBuilder.group({
      nome: ['',],
      descricao: [''],
      componente: [''],
      chaveLicenca: [''],
      dataVencimento: [''],
      atualizadoPor: [''],
      dataUltimaAtualizacao: [''],
      usuarioCriador: [''],
      dataCriacao: [''],
    });
  }

  ngOnInit() {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (software) => {
        if (!software) {
          throwError(() => Error('Equipamento não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: software.nome,
          descricao: software.descricao,
          componente: software.componente.nome,
          chaveLicenca: software.chaveLicenca,
          dataVencimento: software.dataVencimento,
          atualizadoPor: software.atualizadoPor?.nome,
          dataUltimaAtualizacao: software.dataUltimaAtualizacao,
          usuarioCriador: software.usuarioCriador?.nome,
          dataCriacao: software.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }
}
