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
  selector: 'app-projetos-editar',
  templateUrl: './projetos-editar.component.html',
  styleUrl: './projetos-editar.component.scss'
})
export class ProjetosEditarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    dialog: MatDialog,
    usuarioSessaoService: SessaoService,
    private service: ProjetoService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService, dialog);

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)]
    })

  }

  ngOnInit() {
    const uid = this.activatedRoute.snapshot.params['uid'];
    this.carregando = true;

    this.service.obterPorUID(uid)
    .subscribe({
      next: (projeto) => {
        if (!projeto) {
          throw new Error('Objeto não existe.');
        }
    
        this.formulario.setValue({
          nome: projeto.nome,
          descricao: projeto.descricao
        })

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });

  }
  
  override onSubmit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;

    const projeto: ProjetoEnvio = {
      nome: nome,
      descricao: descricao,
    };
    
    this.service.editar(uid, projeto)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Projeto editado com sucesso!');
          this.router.navigate(['/ativos/administracao/projetos/buscar']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
