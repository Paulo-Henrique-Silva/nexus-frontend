import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { Router } from '@angular/router';
import { SessaoService } from './compartilhado/services/sessao/sessao.service';
import { UsuariosService } from './login/usuarios.service';
import { EMPTY, combineLatest, switchMap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusReferenciaObjeto } from './compartilhado/models/dtos/nexus-referencia-objeto';
import { AtribuicoesService } from './atribuicoes/atribuicoes.service';

//Muda o formato de data da aplicação para DD/MM/YYYY
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  nomeAcesso: string = '';

  projetoEPerfil: string = '';
  perfil: NexusReferenciaObjeto | null = null;

  existemAtribuicoes: boolean = false;
  existemNotificacoes: boolean = false;

  //Se a aplicação está obtendo ou não informações do usuário.
  carregandoInfoUsuario: boolean = false;

  constructor(
    private authService: AuthService,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    //Obtém se o usuário autenticado ou não. 
    //Não se desiscreve, pois permanecerá por toda a execução do aplicativo.
    
    this.authService.usuarioAutenticado$
    .pipe(
      switchMap(usuarioAutenticado => {
        //Obtém se o usuário está autenticado.
        this.usuarioAutenticado = usuarioAutenticado;
        
        if (usuarioAutenticado) {
          this.carregandoInfoUsuario = true;
          return this.usuarioService.obterPorUID(this.sessaoService.uidUsuario)
        }

        return EMPTY; //encera a execução dos observables.
      }),
      switchMap(usuario => {
        //Obtém informações do usuário.
        if (usuario) {
          this.nomeAcesso = usuario.nomeAcesso;
          return combineLatest([
            this.usuarioService.obterAtribuicoesPorUsuarioUID(this.sessaoService.uidUsuario), 
            this.usuarioService.obterNotificacoesPorUsuarioUID(this.sessaoService.uidUsuario)
          ]);
        }
        
        return throwError(() => Error('Usuário não encontrado!'));
      }
      ))
      .subscribe({
        next: ([atribuicoes, notificacoes]) => {
          //procura por atribuições não concluídas e
          //notificaçoes não vistas.
          this.existemAtribuicoes = atribuicoes.itens.filter(a => !a.concluida).length > 0;
          this.existemNotificacoes = notificacoes.itens.filter(a => !a.vista).length > 0;
      },
      error: () => {
        this.tratarErroCarregamentoUsuario();
      }
    });

    combineLatest([this.sessaoService.projetoSelecionado$, this.sessaoService.perfilSelecionado$])
    .subscribe({
      next: ([projeto, perfil]) => {

        if (projeto && perfil) {
          this.projetoEPerfil = `${projeto.nome} - ${perfil.nome}`;
          this.perfil = perfil;
        }
        else {
          this.projetoEPerfil = 'Não configurado'
          this.perfil = null;
        }

        this.carregandoInfoUsuario = false;
      },
      error: () => {
        this.tratarErroCarregamentoUsuario();
      }
    });
  }

  tratarErroCarregamentoUsuario(): void {
    this.snackBar.open('Não foi possível carregar as informações do usuário.', 'Ok')
    ._dismissAfter(3000);

    this.sairDaConta();
    this.carregandoInfoUsuario = false;
  }

  sairDaConta(): void {
    this.authService.sairDaConta();
    this.router.navigate(['login']);
  }
}
