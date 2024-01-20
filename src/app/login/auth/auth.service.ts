import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioEnvio } from '../usuario-envio';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginSucedido: boolean = false

  usuarioAutenticado: Subject<boolean> = new Subject<boolean>()

  constructor() { }
  
  fazerLogin(usuarioEnvio: UsuarioEnvio): void {
    this.usuarioAutenticado.next(true);
    this._loginSucedido = true
  }

  get loginSucedido(): boolean {
    return this._loginSucedido
  }
}
