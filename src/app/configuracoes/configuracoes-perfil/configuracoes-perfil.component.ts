import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UsuarioPerfilService } from '../service/usuario-perfil.service';
import { UsuarioPerfilResposta } from '../model/usuario-perfil-resposta';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusFormulario } from '../../compartilhado/models/nexus-formulario';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensValidacaoService } from '../../compartilhado/services/mensagens-validacao/mensagens-validacao.service';
import { AuthService } from '../../login/auth/auth.service';
import { delay } from 'rxjs';

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

  projetoPerfis: ProjetoPerfil = {}
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
    private usuarioPerfilService: UsuarioPerfilService
  ) {
    super(authService, formBuilder, router, mensagemValidacaoService, activatedRoute, 
      snackBar, sessaoService);

    this.formulario = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.carregando = true;

    this.usuarioPerfilService.obterTudoPorUsuarioUID(1, this.sessaoService.uidUsuario)
      .subscribe({
        next: (usuarioPerfis) => {
          //O projetos serão agrupados por meio de chaves, que são compostas pelo 
          //UID do projeto + @SPLIT@ + nome.
          //Logo, há um objeto que contém todos os perfis do usuários que podem ser acessados
          //caso a chave sera inserida.

          this.projetoPerfis = this.agruparPorProjeto(usuarioPerfis);
          this.carregando = false;
        },
        error: () => {
          this.mostrarSnackBarOk('Um erro inesperado aconteceu!');
          this.carregando = false;
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

  override onSubmit(): void {

  }

  setStep(index: number) {
    this.step = index;
  }

  //Evita que múltiplos paineis fiquem abertos de uma só vez.
  //Se já tiver marcado, não irá abrir o painel padrão de novo.
  mudarStepPerfilPadrao(index: number) {
    if (!this.marcouPerfilPadrao) {
      this.step = index;
      this.marcouPerfilPadrao = true;
    }
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