import { Injectable } from '@angular/core';
import { Subject, delay } from 'rxjs';
import { UsuarioEnvio } from '../models/usuario-envio';
import { UsuariosService } from '../usuarios.service';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginSucedido: boolean = false;

  usuarioAutenticado$: Subject<any> = new Subject<any>();

  constructor(
    private usuarioService: UsuariosService,
    private sessaoService: SessaoService
  ) { }
  
  //Verifica se o dados do usuário estão corretos.
  fazerLogin(usuarioEnvio: UsuarioEnvio): void {
    this.usuarioService.login(usuarioEnvio)
      .subscribe( {
        next: (dados) => {
          this.sessaoService.token = dados.token;
          this.sessaoService.uidUsuario = dados.uid
  
          this.usuarioAutenticado$.next(true);
          this._loginSucedido = true;
        },
        error: (error: any) => {
          if (error.status == 401) {
            this.usuarioAutenticado$.next(false);
            this._loginSucedido = false;
          }
        }
      });
  }

  //Reinicia a sessão atual.
  sairDaConta() {
    this.sessaoService.token = ''
    this.sessaoService.uidUsuario = '';
    
    this.usuarioAutenticado$.next(false);
    this._loginSucedido = false;
  }

  get loginSucedido(): boolean {
    return this._loginSucedido;
  }
}
