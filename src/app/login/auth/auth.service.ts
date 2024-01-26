import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioEnvio } from '../models/usuario-envio';
import { UsuariosService } from '../usuarios.service';
import { JWTToken } from '../../configuracoes/model/token';
import { SessaoService } from '../../compartilhado/services/usuario-sessao/sessao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginSucedido: boolean = false;

  usuarioAutenticado$: Subject<any> = new Subject<any>();

  constructor(
    private usuarioService: UsuariosService,
    private usuarioSessaoService: SessaoService
  ) { }
  
  fazerLogin(usuarioEnvio: UsuarioEnvio): void {
    this.usuarioService.login(usuarioEnvio)
      .subscribe( {
        next: (dados) => {
          this.usuarioSessaoService.token = dados.token.token;
          this.usuarioSessaoService.uidUsuario = dados.uid
  
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

  sairDaConta() {
    this.usuarioSessaoService.token = ''
    this.usuarioSessaoService.uidUsuario = '';
    
    this.usuarioAutenticado$.next(false);
    this._loginSucedido = false;
  }

  get loginSucedido(): boolean {
    return this._loginSucedido;
  }
}
