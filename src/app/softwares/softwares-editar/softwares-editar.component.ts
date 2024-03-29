import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../../componentes/componentes.service';
import { AuthService } from '../../login/auth/auth.service';
import { SoftwaresService } from '../softwares.service';
import { SoftwareEnvio } from '../models/softwares-envio';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-softwares-editar',
  templateUrl: './softwares-editar.component.html',
  styleUrl: './softwares-editar.component.scss'
})
export class SoftwaresEditarComponent extends NexusFormulario implements OnInit {

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
    dialog: MatDialog,
    sessaoService: SessaoService,
    private service: SoftwaresService,
    private componenteService: ComponentesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService, dialog);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      componente: ['', [Validators.required]],
      chaveLicenca: ['', [Validators.required, Validators.maxLength(200)]],
      dataVencimento: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (software) => {
        if (!software) {
          throwError(() => Error('Componente não encontrado.'));
        }
    
        this.formulario.setValue({
          nome: software.nome,
          descricao: software.descricao,
          componente: software.componente.uid,
          chaveLicenca: software.chaveLicenca,
          dataVencimento: software.dataVencimento,
        })

        this.componentes.push(software.componente);

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

  override onSubmit(): void {
    this.carregando = true;
    this.formularioEnviado = true;
    
    const uid = this.activatedRoute.snapshot.params['uid'];
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

    this.service.editar(uid, software)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Software editado com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/softwares']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
