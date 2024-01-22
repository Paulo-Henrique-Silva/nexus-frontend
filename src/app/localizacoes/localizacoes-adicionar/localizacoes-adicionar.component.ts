import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';

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
    mensagemValidacaoService: MensagensValidacaoService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService)
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })

    this.camposMostrarComo = [ 'Nome', 'Descrição' ]
  }

  override onSubmit(): void {
    if (this.formulario.invalid) {
      alert('ddd')
    }
  }
}
