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
import { last, switchMap, throwError } from 'rxjs';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';

@Component({
  selector: 'app-localizacoes-editar',
  templateUrl: './localizacoes-editar.component.html',
  styleUrl: './localizacoes-editar.component.scss'
})
export class LocalizacoesEditarComponent extends NexusFormulario {

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private localizacaoService: LocalizacoesService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]]
    })

  }

  ngOnInit() {
    const uid = this.activatedRoute.snapshot.params['uid'];
    this.carregando = true;

    this.localizacaoService.obterPorUID(uid)
    .subscribe({
      next: (localizacao) => {
        if (!localizacao) {
          throw new Error('Objeto não existe.');
        }
    
        this.formulario.setValue({
          nome: localizacao.nome,
          descricao: localizacao.descricao
        })
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });

  }
  
  override onSubmit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;

    const projetoUID = this.sessaoService.projetoSelecionado.uid;
    
    const localizacao: LocalizacaoEnvio = {
      nome: nome,
      descricao: descricao,
      projetoUID: projetoUID
    };
    
    this.localizacaoService.editar(uid, localizacao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Localização editada com sucesso!');
          this.router.navigate(['/ativos/localizacoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
  }
  