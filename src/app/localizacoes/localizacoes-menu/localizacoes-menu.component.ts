import { Component } from '@angular/core';
import { NexusReferenciaObjeto } from '../../compartilhado/models/dtos/nexus-referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-localizacoes-menu',
  templateUrl: './localizacoes-menu.component.html',
  styleUrl: './localizacoes-menu.component.scss'
})
export class LocalizacoesMenuComponent {
  perfil: NexusReferenciaObjeto = new NexusReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
