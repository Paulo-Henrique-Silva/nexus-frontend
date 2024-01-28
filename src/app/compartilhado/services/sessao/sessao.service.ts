import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReferenciaObjeto } from '../../models/referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private _uidUsuario: string = '';
  private _token: string = '';

  private _perfilSelecionado$: Subject<ReferenciaObjeto> = new Subject<ReferenciaObjeto>();
  private _projetoSelecionado$: Subject<ReferenciaObjeto> = new Subject<ReferenciaObjeto>();

  private _perfilSelecionado: ReferenciaObjeto = new ReferenciaObjeto();
  private _projetoSelecionado: ReferenciaObjeto = new ReferenciaObjeto();

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

  public get projetoSelecionado$(): Subject<ReferenciaObjeto> {
    return this._projetoSelecionado$;
  }

  public set projetoSelecionado$(value: Subject<ReferenciaObjeto>) {
    this._projetoSelecionado$ = value;
  }

  public get perfilSelecionado$(): Subject<ReferenciaObjeto> {
    return this._perfilSelecionado$;
  }

  public set perfilSelecionado$(value: Subject<ReferenciaObjeto>) {
    this._perfilSelecionado$ = value;
  }
    
  public get projetoSelecionado(): ReferenciaObjeto {
    return this._projetoSelecionado;
  }

  public set projetoSelecionado(value: ReferenciaObjeto) {
    this._projetoSelecionado = value;
  }

  public get perfilSelecionado(): ReferenciaObjeto {
    return this._perfilSelecionado;
  }

  public set perfilSelecionado(value: ReferenciaObjeto) {
    this._perfilSelecionado = value;
  }

  constructor() { }
}
