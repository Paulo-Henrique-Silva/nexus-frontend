import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReferenciaObjeto } from '../../models/referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private _uidUsuario: string = '';
  private _token: string = '';

  private _perfilSelecionado$: Subject<ReferenciaObjeto | null> = new Subject<ReferenciaObjeto | null>();
  private _projetoSelecionado$: Subject<ReferenciaObjeto | null> = new Subject<ReferenciaObjeto | null>();

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

  public get projetoSelecionado$(): Subject<ReferenciaObjeto | null> {
    return this._projetoSelecionado$;
  }

  public set projetoSelecionado$(value: Subject<ReferenciaObjeto | null>) {
    this._projetoSelecionado$ = value;
  }

  public get perfilSelecionado$(): Subject<ReferenciaObjeto | null> {
    return this._perfilSelecionado$;
  }

  public set perfilSelecionado$(value: Subject<ReferenciaObjeto | null>) {
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
