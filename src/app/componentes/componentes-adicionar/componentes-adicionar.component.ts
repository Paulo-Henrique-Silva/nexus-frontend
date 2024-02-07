import { Component, OnInit } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { LocalizacaoEnvio } from '../../localizacoes/models/localizacao-envio';
import { AuthService } from '../../login/auth/auth.service';
import { ComponentesService } from '../componentes.service';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { ComponenteEnvio } from '../models/componentes-envio';

@Component({
  selector: 'app-componentes-adicionar',
  templateUrl: './componentes-adicionar.component.html',
  styleUrl: './componentes-adicionar.component.scss',
})
export class ComponentesAdicionarComponent extends NexusFormulario implements OnInit {

  tipos: ReferenciaObjeto[] = [];

  //Localizações
  localizacoes: ReferenciaObjeto[] = [];
  pesquisandoLocalizacao: boolean = false;
  pesquisouLocalizacao: boolean = false;

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private service: ComponentesService,
    private localizacaoService: LocalizacoesService,
    private componenteService: ComponentesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]],
      numeroSerie: ['', [Validators.required, Validators.maxLength(200)]],
      marca: ['', [Validators.required, Validators.maxLength(200)]],
      modelo: ['', [Validators.required, Validators.maxLength(200)]],
      tipo: ['', [Validators.required]],
      localizacao: ['', [Validators.required]],
      dataAquisicao: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;

    this.componenteService.obterTipos()
      .subscribe(tipos => {
        this.tipos = tipos
        this.carregando = false;
      });
  }

  pesquisarLocalizacoes(texto: string): void {
    this.localizacoes = [];
    this.pesquisandoLocalizacao = true;
    this.formulario.get('localizacao')?.setValue(null);

    //Sempre obtém apenas da primeira página, por questões de performace.
    this.localizacaoService.obterTudoPorProjetoUID(1, this.sessaoService.projetoSelecionado.uid,
    texto)
    .subscribe(dados =>
    {
      dados.itens.forEach(d => this.localizacoes.push({ uid: d.uid, nome: d.nome }));
      this.localizacoes.sort((a, b) => a.nome < b.nome ? -1 : 1);
      this.pesquisandoLocalizacao = false;
      this.pesquisouLocalizacao = true;
    });
  }

  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const numeroSerie: string = this.formulario.get('numeroSerie')?.value;
    const marca: string = this.formulario.get('marca')?.value;
    const modelo: string = this.formulario.get('modelo')?.value;
    const tipo: number = this.formulario.get('tipo')?.value;
    const localizacao: string = this.formulario.get('localizacao')?.value;
    const dataAquisicao: Date = this.formulario.get('dataAquisicao')?.value;

    const componente: ComponenteEnvio = {
      nome: nome,
      descricao: descricao,
      numeroSerie: numeroSerie,
      localizacaoUID: localizacao,
      status: 0,
      marca: marca,
      modelo: modelo,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      tipo: tipo,
      dataAquisicao: dataAquisicao
    };

    this.service.adicionar(componente)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Componente adicionado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/componentes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
