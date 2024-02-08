import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-manutencoes-menu',
  templateUrl: './manutencoes-menu.component.html',
  styleUrl: './manutencoes-menu.component.scss'
})
export class ManutencoesMenuComponent {
  perfil: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
