import { Component, Input } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';

@Component({
  selector: 'nexus-localizacoes-acoes',
  templateUrl: './localizacoes-acoes.component.html',
  styleUrl: './localizacoes-acoes.component.scss'
})
export class LocalizacoesAcoesComponent {
  @Input()
  objeto: ReferenciaObjeto = new ReferenciaObjeto();
}
