import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { Router } from '@angular/router';
import { SessaoService } from './compartilhado/services/sessao/sessao.service';
import { UsuariosService } from './login/usuarios.service';
import { EMPTY, combineLatest, switchMap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReferenciaObjeto } from './compartilhado/models/referencia-objeto';

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
  perfil: ReferenciaObjeto | null = null;

  //Se a aplicação está obtendo ou não o nome de acesso do usuário.
  carregandoInfoUsuario: boolean = false;

  constructor(
    private authService: AuthService,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
    private router: Router,
    private snackBar: MatSnackBar
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
      }))
      .subscribe({
        next: (usuario) => {
        //Obtém informações do usuário.
        if (usuario) {
          this.nomeAcesso = usuario.nomeAcesso
        }
        
        return throwError(() => Error('Usuário não encontrado!'));
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
