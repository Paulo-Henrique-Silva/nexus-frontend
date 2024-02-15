import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsuarioPerfilService } from '../usuario-perfil.service';
import { UsuarioPerfilResposta } from '../../administracao/models/usuario-perfil/usuario-perfil-resposta';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusFormulario } from '../../compartilhado/models/componentes/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { UsuarioPerfilEnvio } from '../../administracao/models/usuario-perfil/usuario-perfil-envio';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-configuracoes-perfil',
  templateUrl: './configuracoes-perfil.component.html',
  styleUrl: './configuracoes-perfil.component.scss'
})
export class ConfiguracoesPerfilComponent extends NexusFormulario implements OnInit {
  
  step: number = 0;

  //O formulário deve ter o painel do perfil selecionado aberto no começo.
  //Variavel é utilizada para saber se isso já ocorreu.
  marcouPerfilPadrao: boolean = false;

  projetoPerfisAgrupados: ProjetoPerfil = {}
  projetosChaves: string[] = []

  slipter: string = '@SPLIT@';

  constructor(
    authService : AuthService, 
    formBuilder: FormBuilder,
    router: Router,
    mensagemValidacaoService: MensagensValidacaoService,
    activatedRoute: ActivatedRoute,
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    dialog: MatDialog,
    private usuarioPerfilService: UsuarioPerfilService,
    private cdr: ChangeDetectorRef
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService, dialog);

    this.formulario = this.formBuilder.group({
      perfilAtivado: [null]
    });
  }

  ngOnInit(): void {
    this.carregando = true;
    this.projetoPerfisAgrupados = {};

    this.usuarioPerfilService.obterTudoPorUsuarioUID(this.sessaoService.uidUsuario)
      .subscribe({
        next: (usuarioPerfis) => {
          //O projetos serão agrupados por meio de chaves, que são compostas pelo 
          //UID do projeto + @SPLIT@ + nome.
          //Logo, há um objeto que contém todos os perfis do usuário que podem ser acessados
          //caso a chave sera inserida.

          this.projetoPerfisAgrupados = this.agruparPorProjeto(usuarioPerfis);
          this.carregando = false;

          //Ordena pelo nome do projeto (segunda parte da chave)
          this.projetosChaves.sort((a, b) => a.split(this.slipter)[1] < b.split(this.slipter)[1] 
          ? -1 : 1);

          //Ordena os perfis por ordem alfabética.
          this.projetosChaves.forEach(chave => this.projetoPerfisAgrupados[chave]
            .sort((a, b) => a.perfil.nome < b.perfil.nome ? -1 : 1));
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
        }
      });
  }

  agruparPorProjeto(array: UsuarioPerfilResposta[]): ProjetoPerfil {
    return array.reduce((agrupado, objeto) => {
      const chave = objeto.projeto.uid + '@SPLIT@' + objeto.projeto.nome;
  
      // Verifica se a chave já existe na nova array agrupada
      if (!agrupado[chave]) {
        // Se não existir, cria um novo array para essa chave e adiciona a lista de projetos.
        agrupado[chave] = [];
        this.projetosChaves.push(chave);
      }
      
      agrupado[chave].push(objeto);

      return agrupado;
    }, {} as ProjetoPerfil);
  }

  //Evita que múltiplos paineis fiquem abertos de uma só vez.
  //Se já tiver marcado, não irá abrir o painel padrão de novo.
  mudarStepPerfilPadrao(index: number, perfilAtivado: boolean) {
    if (perfilAtivado && !this.marcouPerfilPadrao) {
      this.marcouPerfilPadrao = true;
      this.step = index;
      this.cdr.detectChanges(); //Evita erros de não detecção de mudanças.
    }
    
    return perfilAtivado;
  }

  override onSubmit(): void {
    this.formularioEnviado = true;
    const perfilPorProjetoChave: string = this.formulario.get('perfilAtivado')?.value;

    if (perfilPorProjetoChave) {
      this.carregando = true;

      const projetoUID = perfilPorProjetoChave.split(this.slipter)[0];
      const perfilUID = perfilPorProjetoChave.split(this.slipter)[1];

      const usuarioPerfil: UsuarioPerfilEnvio = { 
        usuarioUID: this.sessaoService.uidUsuario,
        projetoUID: projetoUID,
        perfilUID: perfilUID,
        ativado: true
      }

      //atualiza o perfil atual como ativado(true)
      this.usuarioPerfilService.editar(usuarioPerfil).subscribe({
        next: (resposta) => {
          //Atualiza o formulário.
          this.projetoPerfisAgrupados = { };
          this.projetosChaves = [];
          this.formulario.reset();

          //Atualiza sessão
          this.sessaoService.atualizarSessao(resposta.projeto, resposta.perfil);

          //recarrega form.
          this.ngOnInit();
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu.')
        }
      });
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
  
  prevStep() {
    this.step--;
  }
}

//Agrupa perfis por uma chave 
interface ProjetoPerfil {
  [chave: string]: UsuarioPerfilResposta[];
}