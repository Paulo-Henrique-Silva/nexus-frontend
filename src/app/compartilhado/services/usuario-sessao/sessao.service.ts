import { Injectable } from '@angular/core';
import { JWTToken } from '../../../configuracoes/model/token';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private _uidUsuario: string = '';
  private _token: string = '';
  private _uidPerfilSelecionado: string = '';
  
  public get uidUsuario(): string {
    return this._uidUsuario;
  }
  
  public set uidUsuario(value: string) {
    this._uidUsuario = value;
  }
  
  public get token(): string {
    return this._token;
  }
  
  public set token(value: string) {
    this._token = value;
  }
  
  public get uidPerfilSelecionado():  string {
    return this._uidPerfilSelecionado;
  }

  public set uidPerfilSelecionado(value: string) {
    this._uidPerfilSelecionado = value;
  }
  
  constructor() { }
}
