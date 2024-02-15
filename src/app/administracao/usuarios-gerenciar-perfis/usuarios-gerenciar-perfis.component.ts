import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { AuthService } from '../../login/auth/auth.service';
import { ProjetoService } from '../services/projeto/projeto.service';
import { PerfilService } from '../services/perfil/perfil.service';
import { EMPTY, combineLatest, switchMap } from 'rxjs';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { MatCheckbox } from '@angular/material/checkbox';
import { UsuariosService } from '../../login/usuarios.service';
import { UsuarioPerfilService } from '../../configuracoes/usuario-perfil.service';
import { UsuarioPerfilEnvio } from '../models/usuario-perfil/usuario-perfil-envio';
import { UsuarioPerfilUIDs } from '../models/usuario-perfil/usuario-perfil-uids';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-gerenciar-perfis',
  templateUrl: './usuarios-gerenciar-perfis.component.html',
  styleUrl: './usuarios-gerenciar-perfis.component.scss'
})
export class UsuariosGerenciarPerfisComponent extends NexusFormulario implements OnInit {

  projetos: NexusReferenciaObjeto[] = [];

  perfis: NexusReferenciaObjeto[] = [];

  usuario: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  perfisAtivadosPadrao: string[] = [];

  splitter: string = '@SPLIT@';

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    dialog: MatDialog,
    private usuarioService: UsuariosService,
    private usuarioPerfilService: UsuarioPerfilService,
    private projetoService: ProjetoService,
    private perfilService: PerfilService,
    private cdr: ChangeDetectorRef
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService, dialog);

    this.formulario = this.formBuilder.group({
      perfisAtivados: [[ ]] //inicia como array vazia
    });
  }

  ngOnInit(): void {
    this.carregarPerfis();
  }
  
  carregarPerfis(): void {
    this.carregando = true;
    const usuarioUID = this.activatedRoute.snapshot.params['usuario-uid'];

    this.usuarioService.obterPorUID(usuarioUID)
    .pipe(
      switchMap(usuario => {
        this.usuario = { uid: usuario.uid, nome: usuario.nome };
        return this.usuarioPerfilService.obterTudoPorUsuarioUID(usuario.uid);
      }),
      switchMap(usuarioPerfis => {
        const perfisAtivados: string[] = [];

        usuarioPerfis.forEach(up => perfisAtivados.push(`${up.projeto.uid}@SPLIT@${up.perfil.uid}`));
        this.formulario.setValue({
          perfisAtivados: perfisAtivados
        });
        
        //faz uma copia da array.
        this.perfisAtivadosPadrao = perfisAtivados.slice();

        return combineLatest([this.projetoService.obterTudo(1), this.perfilService.obterTudo(1)]);
      })
    )
    .subscribe({
      next: ([projetoResposta, perfilResposta]) => {
        this.projetos = projetoResposta.itens.sort((a, b) => a.nome < b.nome ? -1 : 1);
        this.perfis = perfilResposta.itens.sort((a, b) => a.nome < b.nome ? -1 : 1);
        this.carregando = false;

        if (!this.sessaoService.uidUsuario.includes('oraculo')) {
          this.perfis.splice(this.perfis.findIndex(p => p.nome.includes('Oráculo')), 1);
        }
        
        this.cdr.detectChanges();
      },
      error: () => {
        this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
      }
    });
  }

  alterarPerfis(cbxPerfil: MatCheckbox, projetoUID: string, perfilUID: string): void {
    const perfisAtivados: string[] = this.formulario.get('perfisAtivados')?.value;
    const projetoEPerfil: string = `${projetoUID}${this.splitter}${perfilUID}`;

    //Se o checkbox for ativada, adiciona o perfil e o projeto.
    //senão, remove-o.
    cbxPerfil.checked
    ? perfisAtivados.push(projetoEPerfil) 
    : perfisAtivados.splice(perfisAtivados.indexOf(projetoEPerfil), 1);

    this.formulario.setValue({
      perfisAtivados: perfisAtivados
    });

    this.cdr.detectChanges();
  }

  get naoAlterouPerfil(): boolean {
    const perfisAtivados: string[] = this.formulario.get('perfisAtivados')?.value;

    const perfisAtivadosPadraoCpy = this.perfisAtivadosPadrao.slice().sort();
    perfisAtivados.sort();

    if (perfisAtivados.length != perfisAtivadosPadraoCpy.length) {
      return false;
    }

    for (let i = 0; i < perfisAtivados.length; i++) {
      if (perfisAtivados[i] != perfisAtivadosPadraoCpy[i]) {
        return false;
      }
    }

    return true;
  }

  override onSubmit(): void {
    this.formularioEnviado = true;
    const perfisAtivados: string[] = this.formulario.get('perfisAtivados')?.value;
    let novosPerfis: UsuarioPerfilEnvio[] = [];
    let perfisExcluidos: UsuarioPerfilUIDs[] = [];

    //obtém os novos perfis
    perfisAtivados.forEach(pa => {
      if (!this.perfisAtivadosPadrao.includes(pa)) {
        novosPerfis.push({
          usuarioUID: this.usuario.uid,
          projetoUID: pa.split(this.splitter)[0],
          perfilUID: pa.split(this.splitter)[1],
          ativado: false,
        })
      }
    })

    //obtém os perfis excluídos
    this.perfisAtivadosPadrao.forEach(pa => {
      if (!perfisAtivados.includes(pa)) {
        perfisExcluidos.push({
          usuarioUID: this.usuario.uid,
          projetoUID: pa.split(this.splitter)[0],
          perfilUID: pa.split(this.splitter)[1],
        })
      }
    })

    this.carregando = true;
    if (novosPerfis.length != 0 && perfisExcluidos.length == 0) {
      this.usuarioPerfilService.adicionarTudo(novosPerfis)
        .subscribe({ next: () => this.mostrarMensagemSucesso(), error: () => this.mostrarMensagemErro()});
    }
    else if (novosPerfis.length == 0 && perfisExcluidos.length != 0) {

      this.usuarioPerfilService.deletarTudo(perfisExcluidos)
        .subscribe({ next: () => {

          //Se o perfil excluído por o selecionado, remove o perfil atual.
          if (perfisExcluidos.filter(c => 
            c.perfilUID == this.sessaoService.perfilSelecionado.uid && 
            c.projetoUID == this.sessaoService.projetoSelecionado.uid)
          ) {
            this.sessaoService.atualizarSessao(null, null);
            this.authService.sairDaConta();

            this.mostrarSnackBarOk('Perfis alterados! Sua sessão foi encerada pois seu perfil atual foi excluído.');
            this.router.navigate(['/login']);
          }

        }, error: () => this.mostrarMensagemErro()})
    }
    else {
      combineLatest([ this.usuarioPerfilService.adicionarTudo(novosPerfis), this.usuarioPerfilService.deletarTudo(perfisExcluidos)])
      .subscribe({ next: () => this.mostrarMensagemSucesso(), error: () => this.mostrarMensagemErro()});
    }
  }

  mostrarMensagemSucesso(): void {
    this.mostrarSnackBarOk('Perfis alterados com sucesso!');
    this.router.navigate(['/ativos/administracao/usuarios/buscar']);
  }

  mostrarMensagemErro(): void {
    this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
  }
}
