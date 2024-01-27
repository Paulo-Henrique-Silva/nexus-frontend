import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { Router } from '@angular/router';
import { SessaoService } from './compartilhado/services/sessao/sessao.service';
import { UsuariosService } from './login/usuarios.service';
import { EMPTY, catchError, delay, of, switchMap, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioPerfilService } from './configuracoes/service/usuario-perfil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  nomeAcesso: string = '';
  projetoEPerfil: string = '';

  //Se a aplicação está obtendo ou não o nome de acesso do usuário.
  carregandoInfoUsuario: boolean = false;

  constructor(
    private authService: AuthService,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
    private usuarioPerfilService: UsuarioPerfilService,
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
      }),
      switchMap(usuario => {
        //Obtém informações do usuário.
        if (usuario) {
          this.nomeAcesso = usuario.nomeAcesso
          return this.usuarioPerfilService.obterTudoPorUsuarioUID(usuario.uid)
        }
        
        return throwError(() => Error('Usuário não encontrado!'));
      })
    )
    .subscribe({
      next: (resultados) => {
        const usuarioPerfilAtivado = resultados.find(o => o.ativado == true);
        
        if (usuarioPerfilAtivado) {
          this.sessaoService.projetoEPerfil$.next(`${usuarioPerfilAtivado.projeto.nome} - ${usuarioPerfilAtivado.perfil.nome}`);
        }
        else {
          this.projetoEPerfil = 'Não Configurado';
        }
        
        this.carregandoInfoUsuario = false;
      },
      error: () => {
        this.tratarErroCarregamentoUsuario();
      }
    });

    this.sessaoService.projetoEPerfil$
      .subscribe(projetoEPerfil => this.projetoEPerfil = projetoEPerfil);
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
