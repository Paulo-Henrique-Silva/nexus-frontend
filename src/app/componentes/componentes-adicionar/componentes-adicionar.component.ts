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

@Component({
  selector: 'app-componentes-adicionar',
  templateUrl: './componentes-adicionar.component.html',
  styleUrl: './componentes-adicionar.component.scss',
})
export class ComponentesAdicionarComponent extends NexusFormulario implements OnInit {

  tipo: ReferenciaObjeto[] = [];

  localizacoes: ReferenciaObjeto[] = [];

  pesquisou: boolean = false;

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

  }

  pesquisarLocalizacoes(texto: string): void {
    const localizacoesData: ReferenciaObjeto[] = [
      { uid: '1', nome: 'SAL1' }, 
      { uid: '2', nome: 'SAL2' }, 
      { uid: '3', nome: 'SAL3' },
      { uid: '4', nome: 'SEE' },
      { uid: '5', nome: 'BIB' },
      { uid: '6', nome: 'AUD' },
      { uid: '7', nome: 'LIB' },
      { uid: '8', nome: 'NEW1' },
      { uid: '9', nome: 'NEW2' },
      { uid: '10', nome: 'NEW3' },
      { uid: '11', nome: 'NEW4' },
      { uid: '12', nome: 'NEW5' },
      { uid: '13', nome: 'NEW6' }
    ]

    this.localizacoes = localizacoesData
      .filter(l => l.nome.toLowerCase().includes(texto.toLowerCase()));

    this.formulario.get('localizacao')?.setValue(null);
    this.pesquisou = true;
  }

  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;

    const projetoUID = this.sessaoService.projetoSelecionado.uid;
    
    const localizacao: LocalizacaoEnvio = {
      nome: nome,
      descricao: descricao,
      projetoUID: projetoUID
    };
    
    this.service.adicionar(localizacao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Localização adicionada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/localizacoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
