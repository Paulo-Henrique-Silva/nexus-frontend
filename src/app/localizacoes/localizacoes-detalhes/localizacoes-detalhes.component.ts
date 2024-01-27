import { Component } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { LocalizacoesService } from '../localizacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

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
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    usuarioSessaoService: SessaoService,
    private localizacaoService: LocalizacoesService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, usuarioSessaoService);

    this.formulario = this.formBuilder.group({
      nome: [''],
      descricao: ['']
    });

    this.camposMostrarComo = [ 'Nome', 'Descrição' ];
  }

  ngOnInit() {
    const uid = this.activatedRoute.snapshot.params['uid'];
    const localizacao = this.localizacaoService.obterPorUID(uid);

    if (!localizacao) {
      throw new Error('Objeto não existe.');
    }

    this.formulario.setValue({
      nome: localizacao.nome,
      descricao: localizacao.descricao
    })
  }
  
  override onSubmit(): void { }

}
