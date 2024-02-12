import { Component } from '@angular/core';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';

@Component({
  selector: 'nexus-ativos-lista',
  templateUrl: './ativos-lista.component.html',
  styleUrl: './ativos-lista.component.scss'
})
export class AtivosListaComponent {

  perfil: NexusReferenciaObjeto | null = null;

  constructor(
    sessaoService: SessaoService
  ) {
    //Caso o UID seja uma string vazia, significa que não perfil selecionado.
    this.perfil = sessaoService.perfilSelecionado.uid.length == 0 
    ? null 
    : sessaoService.perfilSelecionado;
  }
}
