import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-localizacoes-menu',
  templateUrl: './localizacoes-menu.component.html',
  styleUrl: './localizacoes-menu.component.scss'
})
export class LocalizacoesMenuComponent {
  perfil: ReferenciaObjeto | null = null;

  constructor(
    sessaoService: SessaoService
  ) {
    //Caso o UID seja uma string vazia, significa que não perfil selecionado.
    this.perfil = sessaoService.perfilSelecionado.uid.length == 0 
    ? null 
    : sessaoService.perfilSelecionado;
  }
}
