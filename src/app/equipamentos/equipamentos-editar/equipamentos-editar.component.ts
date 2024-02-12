import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../../componentes/componentes.service';
import { ComponenteEnvio } from '../../componentes/models/componentes-envio';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { AuthService } from '../../login/auth/auth.service';
import { EquipamentosService } from '../equipamentos.service';
import { EquipamentoEnvio } from '../models/equipamentos-envio';

@Component({
  selector: 'app-equipamentos-editar',
  templateUrl: './equipamentos-editar.component.html',
  styleUrl: './equipamentos-editar.component.scss'
})
export class EquipamentosEditarComponent extends NexusFormulario implements OnInit {

  tipos: NexusReferenciaObjeto[] = [];

  //Localizações
  localizacoes: NexusReferenciaObjeto[] = [];
  pesquisandoLocalizacao: boolean = false;
  pesquisouLocalizacao: boolean = false;

  //componentes
  componentes: NexusReferenciaObjeto[] = [];
  pesquisandoComponente: boolean = false;
  pesquisouComponente: boolean = false;

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private service: EquipamentosService,
    private localizacaoService: LocalizacoesService,
    private componenteService: ComponentesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      numeroSerie: ['', [Validators.required, Validators.maxLength(200)]],
      marca: ['', [Validators.required, Validators.maxLength(200)]],
      modelo: ['', [Validators.required, Validators.maxLength(200)]],
      tipo: ['', [Validators.required]],
      localizacao: ['', [Validators.required]],
      componente: ['', [Validators.required]],
      dataAquisicao: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterTipos()
    .pipe(
    switchMap((tipos) => {
      this.tipos = tipos
      return this.service.obterPorUID(uid);
    }))
    .subscribe({
      next: (equipamento) => {
        if (!equipamento) {
          throwError(() => Error('Componente não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: equipamento.nome,
          descricao: equipamento.descricao,
          localizacao: equipamento.localizacao.uid,
          componente: equipamento.componente.uid,
          tipo: Number(equipamento.tipo.uid),
          numeroSerie: equipamento.numeroSerie,
          marca: equipamento.marca,
          modelo: equipamento.modelo,
          dataAquisicao: equipamento.dataAquisicao,
        })

        this.localizacoes.push(equipamento.localizacao);
        this.componentes.push(equipamento.componente);

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
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

  override onSubmit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const numeroSerie: string = this.formulario.get('numeroSerie')?.value;
    const marca: string = this.formulario.get('marca')?.value;
    const modelo: string = this.formulario.get('modelo')?.value;
    const tipo: number = this.formulario.get('tipo')?.value;
    const localizacao: string = this.formulario.get('localizacao')?.value;
    const componente: string = this.formulario.get('componente')?.value;
    const dataAquisicao: Date = this.formulario.get('dataAquisicao')?.value;

    const equipamento: EquipamentoEnvio = {
      nome: nome,
      descricao: descricao,
      numeroSerie: numeroSerie,
      localizacaoUID: localizacao,
      componenteUID: componente,
      marca: marca,
      modelo: modelo,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      tipo: tipo,
      dataAquisicao: dataAquisicao
    };

    this.service.editar(uid, equipamento)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Equipamento editado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/equipamentos']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
