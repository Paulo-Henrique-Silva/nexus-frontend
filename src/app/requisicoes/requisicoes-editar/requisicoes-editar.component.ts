import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { RequisicaoEnvio } from '../model/requisicao-envio';
import { RequisicoesService } from '../requisicoes.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-requisicoes-editar',
  templateUrl: './requisicoes-editar.component.html',
  styleUrl: './requisicoes-editar.component.scss'
})
export class RequisicoesEditarComponent extends NexusFormulario implements OnInit {

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
    dialog: MatDialog,
    private service: RequisicoesService,
    private usuarioService: UsuariosService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService, dialog);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      coordenador: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (requisicoes) => {
        if (!requisicoes) {
          throwError(() => Error('Requisição não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: requisicoes.nome,
          descricao: requisicoes.descricao,
          coordenador: requisicoes.coordenador.uid
        })

        this.usuarios.push(requisicoes.coordenador);

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }

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
    this.formularioEnviado = true;
    
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const coordenador: string = this.formulario.get('coordenador')?.value;

    const requisicao: RequisicaoEnvio = {
      nome: nome,
      descricao: descricao,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      coordenadorUID: coordenador,
    };

    this.service.editar(uid, requisicao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Requisição editada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/requisicoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }

}
