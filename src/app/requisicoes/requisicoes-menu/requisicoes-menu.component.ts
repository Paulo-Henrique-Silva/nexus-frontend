import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-requisicoes-menu',
  templateUrl: './requisicoes-menu.component.html',
  styleUrl: './requisicoes-menu.component.scss'
})
export class RequisicoesMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
