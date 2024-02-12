import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-administracao-menu',
  templateUrl: './administracao-menu.component.html',
  styleUrl: './administracao-menu.component.scss'
})
export class AdministracaoMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
