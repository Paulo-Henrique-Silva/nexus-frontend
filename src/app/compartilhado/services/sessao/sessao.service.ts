import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NexusReferenciaObjeto } from '../../models/dtos/nexus-referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private _uidUsuario: string = '';
  private _token: string = '';

  private _perfilSelecionado$: Subject<NexusReferenciaObjeto | null> = new Subject<NexusReferenciaObjeto | null>();
  private _projetoSelecionado$: Subject<NexusReferenciaObjeto | null> = new Subject<NexusReferenciaObjeto | null>();

  private _perfilSelecionado: NexusReferenciaObjeto = new NexusReferenciaObjeto();
  private _projetoSelecionado: NexusReferenciaObjeto = new NexusReferenciaObjeto();

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

  public get projetoSelecionado$(): Subject<NexusReferenciaObjeto | null> {
    return this._projetoSelecionado$;
  }

  public set projetoSelecionado$(value: Subject<NexusReferenciaObjeto | null>) {
    this._projetoSelecionado$ = value;
  }

  public get perfilSelecionado$(): Subject<NexusReferenciaObjeto | null> {
    return this._perfilSelecionado$;
  }

  public set perfilSelecionado$(value: Subject<NexusReferenciaObjeto | null>) {
    this._perfilSelecionado$ = value;
  }
    
  public get projetoSelecionado(): NexusReferenciaObjeto {
    return this._projetoSelecionado;
  }

  public set projetoSelecionado(value: NexusReferenciaObjeto) {
    this._projetoSelecionado = value;
  }

  public get perfilSelecionado(): NexusReferenciaObjeto {
    return this._perfilSelecionado;
  }

  public set perfilSelecionado(value: NexusReferenciaObjeto) {
    this._perfilSelecionado = value;
  }

  constructor() { }
}
