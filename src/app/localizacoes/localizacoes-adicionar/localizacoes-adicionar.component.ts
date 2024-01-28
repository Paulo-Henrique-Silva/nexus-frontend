import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { LocalizacoesService } from '../localizacoes.service';
import { LocalizacaoEnvio } from '../models/localizacao-envio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { switchMap, throwError } from 'rxjs';

@Component({
  selector: 'app-localizacoes-adicionar',
  templateUrl: './localizacoes-adicionar.component.html',
  styleUrl: './localizacoes-adicionar.component.scss'
})
export class LocalizacoesAdicionarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private localizacaoService: LocalizacoesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    
    this.sessaoService.projetoSelecionado$
    .pipe(
      switchMap(projeto => {
        if (!projeto) {
          throwError(() => Error('Projeto não encontrado.'));
        }

        const projetoUID = projeto.uid;

        const localizacao: LocalizacaoEnvio = {
          nome: nome,
          descricao: descricao,
          projetoUID: projetoUID
        };

        return this.localizacaoService.adicionar(localizacao);
      })
    )
    .subscribe({
      next: () => {
        this.mostrarSnackBarOk('Localização adicionada com sucesso!');
        this.router.navigate(['/ativos/localizacoes/buscar']);
      },
      error: () => {
        this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
      }
    })
  }
}
