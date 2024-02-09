import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../../componentes/componentes.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuariosService } from '../../login/usuarios.service';
import { ManutencoesService } from '../manutencoes.service';
import { ManutencaoEnvio } from '../models/manutencoes-envio';

@Component({
  selector: 'app-manutencoes-editar',
  templateUrl: './manutencoes-editar.component.html',
  styleUrl: './manutencoes-editar.component.scss'
})
export class ManutencoesEditarComponent extends NexusFormulario implements OnInit {

  tipos: ReferenciaObjeto[] = [];

  //componentes
  componentes: ReferenciaObjeto[] = [];
  pesquisandoComponente: boolean = false;
  pesquisouComponente: boolean = false;

  //usuários
  usuarios: ReferenciaObjeto[] = [];
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
    private service: ManutencoesService,
    private componenteService: ComponentesService,
    private usuarioService: UsuariosService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]],
      componente: [{ value: '', disabled:true }, [Validators.required]],
      responsavel: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (componente) => {
        if (!componente) {
          throwError(() => Error('Componente não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: componente.nome,
          descricao: componente.descricao,
          componente: componente.componente.uid,
          responsavel: componente.responsavel.uid
        })

        this.componentes.push(componente.componente);
        this.usuarios.push(componente.responsavel);

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }

  pesquisarComponentes(texto: string): void {
    this.componentes = [];
    this.pesquisandoComponente = true;
    this.formulario.get('componente')?.setValue(null);

    //Sempre obtém apenas da primeira página, por questões de performace.
    this.componenteService.obterTudoPorProjetoUID(1, this.sessaoService.projetoSelecionado.uid,
    texto)
    .subscribe(dados =>
    {
      dados.itens.forEach(d => this.componentes.push({ uid: d.uid, nome: d.nome }));

      //Ordena por nome.
      this.componentes.sort((a, b) => a.nome < b.nome ? -1 : 1);
      this.pesquisandoComponente = false;
      this.pesquisouComponente = true;
    });
  }

  pesquisarUsuarios(texto: string): void {
    this.usuarios = [];
    this.pesquisandoUsuario = true;
    this.formulario.get('responsavel')?.setValue(null);

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
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const componente: string = this.formulario.get('componente')?.value;
    const responsavel: string = this.formulario.get('responsavel')?.value;

    const manutencao: ManutencaoEnvio = {
      nome: nome,
      descricao: descricao,
      componenteUID: componente,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      dataInicio: new Date(),
      dataTermino: null,
      responsavelUID: responsavel,
      solucao: null
    };

    console.log(manutencao);

    this.service.editar(uid, manutencao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Manutenções editada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/manutencoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
