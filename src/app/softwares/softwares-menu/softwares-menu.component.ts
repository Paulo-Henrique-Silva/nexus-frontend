import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-softwares-menu',
  templateUrl: './softwares-menu.component.html',
  styleUrl: './softwares-menu.component.scss'
})
export class SoftwaresMenuComponent {
  perfil: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
