import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { RequisicoesService } from '../requisicoes.service';
import { RequisicaoEnvio } from '../model/requisicao-envio';

@Component({
  selector: 'app-requisicoes-adicionar',
  templateUrl: './requisicoes-adicionar.component.html',
  styleUrl: './requisicoes-adicionar.component.scss'
})
export class RequisicoesAdicionarComponent extends NexusFormulario implements OnInit {

  //usuários
  usuarios: NexusReferenciaObjeto[] = [];
  pesquisandoUsuario: boolean = false;
  pesquisouUsuario: boolean = false;

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private service: RequisicoesService,
    private usuarioService: UsuariosService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      coordenador: ['', [Validators.required]],
    })
  }

  ngOnInit(): void { }

  pesquisarUsuarios(texto: string): void {
    this.usuarios = [];
    this.pesquisandoUsuario = true;
    this.formulario.get('coordenador')?.setValue(null);

    //Sempre obtém apenas da primeira página, por questões de performace.
    this.usuarioService.obterTudo(1, texto)
    .subscribe(dados =>
    {
      dados.itens.forEach(d => this.usuarios.push({ uid: d.uid, nome: d.nome }));
      this.usuarios.sort((a, b) => a.nome < b.nome ? -1 : 1);
      this.pesquisandoUsuario = false;
      this.pesquisouUsuario = true;
    });
  }
  
  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const coordenador: string = this.formulario.get('coordenador')?.value;

    const requisicao: RequisicaoEnvio = {
      nome: nome,
      descricao: descricao,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      coordenadorUID: coordenador,
    };

    this.service.adicionar(requisicao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Requisição adicionada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/requisicoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
