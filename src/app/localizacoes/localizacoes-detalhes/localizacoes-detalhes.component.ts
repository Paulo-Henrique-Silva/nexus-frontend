import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';

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
    mensagemValidacaoService: MensagensValidacaoService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService)
    this.formulario = this.formBuilder.group({
      nome: ['SAL1'],
      descricao: ['Sala de Aula 1']
    })

    this.formulario.get('nome')?.disable

    this.camposMostrarComo = [ 'Nome', 'Descrição' ]
  }
  
  override onSubmit(): void { }

}
