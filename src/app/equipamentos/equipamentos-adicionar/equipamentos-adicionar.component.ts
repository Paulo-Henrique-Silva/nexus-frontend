import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { LocalizacoesService } from '../../localizacoes/localizacoes.service';
import { AuthService } from '../../login/auth/auth.service';
import { EquipamentosService } from '../equipamentos.service';
import { EquipamentoEnvio } from '../models/equipamentos-envio';
import { ComponentesService } from '../../componentes/componentes.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipamentos-adicionar',
  templateUrl: './equipamentos-adicionar.component.html',
  styleUrl: './equipamentos-adicionar.component.scss'
})
export class EquipamentosAdicionarComponent extends NexusFormulario implements OnInit {

  tipos: NexusReferenciaObjeto[] = [];

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
    dialog: MatDialog,
    private service: EquipamentosService,
    private componenteService: ComponentesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService,dialog);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      numeroSerie: ['', [Validators.required, Validators.maxLength(200)]],
      marca: ['', [Validators.required, Validators.maxLength(200)]],
      modelo: ['', [Validators.required, Validators.maxLength(200)]],
      tipo: ['', [Validators.required]],
      componente: ['', [Validators.required]],
      dataAquisicao: ['', [Validators.required]],
      linkNotaFiscal: ['', [Validators.required, Validators.maxLength(200)]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;

    this.service.obterTipos()
      .subscribe(tipos => {
        this.tipos = tipos
        this.carregando = false;
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
    this.formularioEnviado = true;
    this.carregando = true;
    
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const numeroSerie: string = this.formulario.get('numeroSerie')?.value;
    const marca: string = this.formulario.get('marca')?.value;
    const modelo: string = this.formulario.get('modelo')?.value;
    const tipo: number = this.formulario.get('tipo')?.value;
    const componente: string = this.formulario.get('componente')?.value;
    const dataAquisicao: Date = this.formulario.get('dataAquisicao')?.value;
    const linkNotaFiscal: string = this.formulario.get('linkNotaFiscal')?.value;

    const equipamento: EquipamentoEnvio = {
      nome: nome,
      descricao: descricao,
      numeroSerie: numeroSerie,
      componenteUID: componente,
      marca: marca,
      modelo: modelo,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      tipo: tipo,
      dataAquisicao: dataAquisicao,
      linkNotaFiscal: linkNotaFiscal
    };

    this.service.adicionar(equipamento)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Equipamento adicionado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/equipamentos']);
        },
        error: (erro) => {
          if (erro.status) {
            this.mostrarSnackBarOk('Número de série já cadastrado.');
            this.formulario.reset();
            this.carregando = false;
            return;
          }

          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
