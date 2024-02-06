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
import { ComponentesService } from '../componentes.service';

@Component({
  selector: 'app-componentes-detalhes',
  templateUrl: './componentes-detalhes.component.html',
  styleUrl: './componentes-detalhes.component.scss'
})
export class ComponentesDetalhesComponent extends NexusFormulario {
  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private componenteService: ComponentesService,
    private localizacaoService: LocalizacoesService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      localizacao: [''],
      tipo: [''],
      numeroSerie: [''],
      marca: [''],
      modelo: [''],
      dataAquisicao: [''],
      atualizadoPor: [''],
      dataUltimaAtualizacao: [''],
      usuarioCriador: [''],
      dataCriacao: ['']
    });
  }

  ngOnInit() {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.componenteService.obterPorUID(uid)
    .subscribe({
      next: (componente) => {
        if (!componente) {
          throwError(() => Error('Localização não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: componente.nome,
          descricao: componente.descricao,
          localizacao: componente.localizacao.nome,
          tipo: componente.tipo.nome,
          numeroSerie: componente.numeroSerie,
          marca: componente.marca,
          modelo: componente.modelo,
          dataAquisicao: componente.dataAquisicao,
          atualizadoPor: componente.atualizadoPor?.nome,
          dataUltimaAtualizacao: componente.dataUltimaAtualizacao,
          usuarioCriador: componente.usuarioCriador?.nome,
          dataCriacao: componente.dataCriacao,
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }
  
  override onSubmit(): void { }

}
