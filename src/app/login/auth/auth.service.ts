import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioEnvio } from '../models/usuario-envio';
import { UsuariosService } from '../usuarios.service';
import { JWTToken } from '../../configuracoes/model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginSucedido: boolean = false;
  private token: JWTToken = new JWTToken();
  usuarioAutenticado$: Subject<any> = new Subject<any>();

  constructor(private usuarioService: UsuariosService) { }
  
  fazerLogin(usuarioEnvio: UsuarioEnvio): void {
    this.usuarioService.login(usuarioEnvio)
      .subscribe( {
        next: (dados) => {
          this.token = dados.token
  
          this.usuarioAutenticado$.next(true);
          this._loginSucedido = true;
        },
        error: (error: any) => {
          console.log(error.status)
          if (error.status == 401) {
            this.usuarioAutenticado$.next(false);
            this._loginSucedido = false;
          }
        }
      });
  }

  get loginSucedido(): boolean {
    return this._loginSucedido;
  }
}
