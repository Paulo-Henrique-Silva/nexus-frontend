import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { ProjetoService } from '../services/projeto/projeto.service';
import { ProjetoEnvio } from '../models/projeto/projeto-envio';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projetos-adicionar',
  templateUrl: './projetos-adicionar.component.html',
  styleUrl: './projetos-adicionar.component.scss'
})
export class ProjetosAdicionarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    dialog: MatDialog,
    private service: ProjetoService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)]
    })
  }

  override onSubmit(): void {
    this.formularioEnviado = true;
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;

    const projeto: ProjetoEnvio = {
      nome: nome,
      descricao: descricao
    };
    
    this.service.adicionar(projeto)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Projeto adicionado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/administracao']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
  }

}
