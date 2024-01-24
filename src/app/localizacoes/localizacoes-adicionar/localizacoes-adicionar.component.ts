import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { LocalizacoesService } from '../localizacoes.service';
import { LocalizacaoEnvio } from '../models/localizacao-envio';

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
    private localizacaoService: LocalizacoesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute)
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })

    this.camposMostrarComo = [ 'Nome', 'Descrição' ]
  }

  override onSubmit(): void {
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;

    const localizacao: LocalizacaoEnvio = {
      nome: nome,
      descricao: descricao,
      projetoUID: '1'
    };

    this.localizacaoService.adicionar(localizacao);

    this.router.navigate(['/ativos/localizacoes/buscar']);
  }
}
