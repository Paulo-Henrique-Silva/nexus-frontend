import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-requisicoes-menu',
  templateUrl: './requisicoes-menu.component.html',
  styleUrl: './requisicoes-menu.component.scss'
})
export class RequisicoesMenuComponent {
  perfil: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
