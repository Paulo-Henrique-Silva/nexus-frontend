import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-manutencoes-menu',
  templateUrl: './manutencoes-menu.component.html',
  styleUrl: './manutencoes-menu.component.scss'
})
export class ManutencoesMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
