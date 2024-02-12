import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-equipamentos-menu',
  templateUrl: './equipamentos-menu.component.html',
  styleUrl: './equipamentos-menu.component.scss'
})
export class EquipamentosMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
