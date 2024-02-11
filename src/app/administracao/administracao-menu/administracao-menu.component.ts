import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-administracao-menu',
  templateUrl: './administracao-menu.component.html',
  styleUrl: './administracao-menu.component.scss'
})
export class AdministracaoMenuComponent {
  perfil: ReferenciaObjeto = new ReferenciaObjeto();

  constructor(
    sessaoService: SessaoService
  ) {
    this.perfil = sessaoService.perfilSelecionado;
  }
}
