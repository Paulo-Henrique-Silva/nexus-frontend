import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../../componentes/componentes.service';
import { AuthService } from '../../login/auth/auth.service';
import { ManutencoesService } from '../manutencoes.service';
import { ManutencaoEnvio } from '../models/manutencoes-envio';
import { UsuariosService } from '../../login/usuarios.service';

@Component({
  selector: 'app-manutencoes-adicionar',
  templateUrl: './manutencoes-adicionar.component.html',
  styleUrl: './manutencoes-adicionar.component.scss'
})
export class ManutencoesAdicionarComponent extends NexusFormulario implements OnInit {

  tipos: ReferenciaObjeto[] = [];

  componente: ReferenciaObjeto = new ReferenciaObjeto();

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
    const componenteUID: string = this.activatedRoute.snapshot.params['componente-uid'];

    this.componenteService.obterPorUID(componenteUID)
      .subscribe({
      next: (dados) => {
        this.componente.uid = dados.uid;
        this.componente.nome = dados.nome;
        this.formulario.patchValue({ componente: componenteUID });
        this.carregando = false;
      },
      error: () => {
        this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
      }});
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

    this.service.adicionar(manutencao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Manutenção adicionada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/manutencoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
