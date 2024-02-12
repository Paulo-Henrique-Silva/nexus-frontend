import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-componentes-menu',
  templateUrl: './componentes-menu.component.html',
  styleUrl: './componentes-menu.component.scss'
})
export class ComponentesMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
