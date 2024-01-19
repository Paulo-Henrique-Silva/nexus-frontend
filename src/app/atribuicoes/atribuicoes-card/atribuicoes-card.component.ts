import { Component, Input } from '@angular/core';
import { Atribuicao } from '../atribuicao';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';

@Component({
  selector: 'nexus-atribuicoes-card',
  templateUrl: './atribuicoes-card.component.html',
  styleUrl: './atribuicoes-card.component.scss'
})
export class AtribuicoesCardComponent {
  @Input()
  atribuicao: Atribuicao = new Atribuicao("1", "Aprovar requisição", "Aprove a descrição conforme dito.", 
  new ReferenciaObjeto("2", "Paulo Silva"), 0, new Date(2024, 1, 1), false, 
  new ReferenciaObjeto("566", "Access Point"), new Date(2024, 1, 1), 
  new ReferenciaObjeto("3", "Paulo Silva"), new ReferenciaObjeto("4", "Paulo Silva"), 
  new Date(2024, 1, 1));
}
