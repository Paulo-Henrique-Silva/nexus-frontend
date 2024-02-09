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
import { SoftwaresService } from '../softwares.service';
import { SoftwareEnvio } from '../models/softwares-envio';

@Component({
  selector: 'app-softwares-adicionar',
  templateUrl: './softwares-adicionar.component.html',
  styleUrl: './softwares-adicionar.component.scss'
})
export class SoftwaresAdicionarComponent extends NexusFormulario implements OnInit {

  tipos: ReferenciaObjeto[] = [];

  componente: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private service: SoftwaresService,
    private componenteService: ComponentesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      componente: [{ value: '', disabled:true }, [Validators.required]],
      chaveLicenca: ['', [Validators.required, Validators.maxLength(200)]],
      dataVencimento: ['', [Validators.required]],
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
  override onSubmit(): void {
    this.carregando = true;
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const componente: string = this.formulario.get('componente')?.value;
    const chaveLicenca: string = this.formulario.get('chaveLicenca')?.value;
    const dataVencimento: Date = this.formulario.get('dataVencimento')?.value;

    const software: SoftwareEnvio = {
      nome: nome,
      descricao: descricao,
      componenteUID: componente,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      chaveLicenca: chaveLicenca,
      dataVencimento: dataVencimento
    };

    this.service.adicionar(software)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Software adicionado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/softwares']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
