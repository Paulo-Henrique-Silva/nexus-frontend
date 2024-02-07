import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-equipamentos-menu',
  templateUrl: './equipamentos-menu.component.html',
  styleUrl: './equipamentos-menu.component.scss'
})
export class EquipamentosMenuComponent {
  perfil: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
