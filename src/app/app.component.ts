import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth/auth.service';
import { take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { SessaoService } from './compartilhado/services/usuario-sessao/sessao.service';
import { UsuariosService } from './login/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  nomeAcesso: string = '';

  constructor(
    private authService: AuthService,
    private sessaoService: SessaoService,
    private usuarioService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.usuarioAutenticado$.pipe().subscribe(usuarioAutenticado => 
      {
        this.usuarioService.obterPorUID(this.sessaoService.uidUsuario)
          .subscribe(usuario => this.nomeAcesso = usuario.nomeAcesso);
          
        this.usuarioAutenticado = usuarioAutenticado
      });
  }

  sairDaConta() {
    this.authService.sairDaConta();
    this.router.navigate(['login']);
  }
}
