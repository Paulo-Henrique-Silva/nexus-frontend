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
import { UsuariosService } from '../../login/usuarios.service';
import { ManutencoesService } from '../manutencoes.service';
import { ManutencaoEnvio } from '../models/manutencoes-envio';

@Component({
  selector: 'app-manutencoes-editar',
  templateUrl: './manutencoes-editar.component.html',
  styleUrl: './manutencoes-editar.component.scss'
})
export class ManutencoesEditarComponent extends NexusFormulario implements OnInit {

  //componentes
  componentes: NexusReferenciaObjeto[] = [];

  //usuários
  usuarios: NexusReferenciaObjeto[] = [];

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    private service: ManutencoesService,
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);
      
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: ['', Validators.maxLength(400)],
      componente: [{ value: ''}, [Validators.required]],
      responsavel: [{ value: '' }, [Validators.required]],
      solucao: ['', [Validators.required, Validators.maxLength(200)]],
    })
  }

  ngOnInit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];

    this.service.obterPorUID(uid)
    .subscribe({
      next: (manutencoes) => {
        if (!manutencoes) {
          throwError(() => Error('Requisição não encontrada.'));
        }
    
        this.formulario.setValue({
          nome: manutencoes.nome,
          descricao: manutencoes.descricao,
          componente: manutencoes.componente.uid,
          responsavel: manutencoes.responsavel.uid,
          solucao: manutencoes.solucao,
        })

        this.componentes.push(manutencoes.componente);
        this.usuarios.push(manutencoes.responsavel);

        this.carregando = false;
      },
      error: () => this.mostrarSnackBarOk('Um erro inesperado aconteceu!')
    });
  }

  override onSubmit(): void {
    this.carregando = true;
    const uid = this.activatedRoute.snapshot.params['uid'];
    const nome: string = this.formulario.get('nome')?.value;
    const descricao: string = this.formulario.get('descricao')?.value;
    const componente: string = this.formulario.get('componente')?.value;
    const responsavel: string = this.formulario.get('responsavel')?.value;
    const solucao: string = this.formulario.get('solucao')?.value;

    const manutencao: ManutencaoEnvio = {
      nome: nome,
      descricao: descricao,
      componenteUID: componente,
      projetoUID: this.sessaoService.projetoSelecionado.uid,
      dataInicio: new Date(),
      dataTermino: null,
      responsavelUID: responsavel,
      solucao: solucao
    };

    this.service.editar(uid, manutencao)
      .subscribe({
        next: () => {
          this.mostrarSnackBarOk('Manutenção editada com sucesso!');
          this.carregando = false;
          this.router.navigate(['/ativos/manutencoes']);
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      })
    }
}
