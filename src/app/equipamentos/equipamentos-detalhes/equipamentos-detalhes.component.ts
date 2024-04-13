import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { EquipamentosService } from '../equipamentos.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipamentos-detalhes',
  templateUrl: './equipamentos-detalhes.component.html',
  styleUrl: './equipamentos-detalhes.component.scss'
})
export class EquipamentosDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    dialog: MatDialog,
    usuarioSessaoService: SessaoService,
    private service: EquipamentosService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      localizacao: [''],
      componente: [''],
      tipo: [''],
      numeroSerie: [''],
      marca: [''],
      modelo: [''],
      dataAquisicao: [''],
      linkNotaFiscal: [''],
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
      next: (equipamento) => {
        if (!equipamento) {
          throwError(() => Error('Equipamento não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: equipamento.nome,
          descricao: equipamento.descricao,
          componente: equipamento.componente.nome,
          tipo: equipamento.tipo.nome,
          numeroSerie: equipamento.numeroSerie,
          marca: equipamento.marca,
          modelo: equipamento.modelo,
          dataAquisicao: equipamento.dataAquisicao,
          linkNotaFiscal: equipamento.linkNotaFiscal,
          atualizadoPor: equipamento.atualizadoPor?.nome,
          dataUltimaAtualizacao: equipamento.dataUltimaAtualizacao,
          usuarioCriador: equipamento.usuarioCriador?.nome,
          dataCriacao: equipamento.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }

}
