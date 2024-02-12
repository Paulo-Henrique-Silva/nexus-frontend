import { Injectable } from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { UsuarioEnvio } from '../models/usuario-envio';
import { UsuariosService } from '../usuarios.service';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { UsuarioPerfilService } from '../../configuracoes/usuario-perfil.service';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginSucedido: boolean = false;

  usuarioAutenticado$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private usuarioService: UsuariosService,
    private usuarioPerfilService: UsuarioPerfilService,
    private sessaoService: SessaoService
  ) { }
  
  //Verifica se o dados do usuário estão corretos.
  fazerLogin(usuarioEnvio: UsuarioEnvio): void {
    this.usuarioService.login(usuarioEnvio)
    .pipe(
      switchMap(dados => {
        this.sessaoService.token = dados.token;
        this.sessaoService.uidUsuario = dados.uid
    
        this.usuarioAutenticado$.next(true);
        this._loginSucedido = true;

        return this.usuarioPerfilService.obterTudoPorUsuarioUID(dados.uid);
      }))
      .subscribe({
          next: (resultados) => {
            //Obtém o perfil do usuário.
            const usuarioPerfilAtivado = resultados.find(o => o.ativado == true);
            
            //Atualiza a sessão.
            if (usuarioPerfilAtivado) {
              this.sessaoService.perfilSelecionado$.next(usuarioPerfilAtivado.perfil);
              this.sessaoService.projetoSelecionado$.next(usuarioPerfilAtivado.projeto);

              this.sessaoService.perfilSelecionado = usuarioPerfilAtivado.perfil;
              this.sessaoService.projetoSelecionado = usuarioPerfilAtivado.projeto;
            }
            else {
              this.sessaoService.perfilSelecionado$.next(null);
              this.sessaoService.projetoSelecionado$.next(null);
              this.sessaoService.perfilSelecionado = new NexusReferenciaObjeto();
              this.sessaoService.projetoSelecionado = new NexusReferenciaObjeto();
            }
          },
          error: (error: any) => {
            //Erro de credenciais incorretas.
            if (error.status === 401) {
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
