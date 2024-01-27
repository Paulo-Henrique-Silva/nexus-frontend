import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { Router } from '@angular/router';
import { SessaoService } from './compartilhado/services/usuario-sessao/sessao.service';
import { UsuariosService } from './login/usuarios.service';
import { delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  nomeAcesso: string = '';

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
    this.authService.usuarioAutenticado$.subscribe(usuarioAutenticado => 
    {
      this.usuarioAutenticado = usuarioAutenticado;
      
      if (usuarioAutenticado) {
        //Obtém o nome de acesso do usuário.
        this.carregandoInfoUsuario = true;
        
        this.usuarioService.obterPorUID(this.sessaoService.uidUsuario)
          .subscribe({
            next: (usuario) => {
              this.nomeAcesso = usuario.nomeAcesso
              this.carregandoInfoUsuario = false;
            },
            error: () => {
              this.snackBar.open('Não foi possível carregar as informações do usuário.', 'Ok')
              ._dismissAfter(3000);
              
              this.sairDaConta();
              this.carregandoInfoUsuario = false;
            }
          });
      }
    });
  }

  sairDaConta(): void {
    this.authService.sairDaConta();
    this.router.navigate(['login']);
  }
}
