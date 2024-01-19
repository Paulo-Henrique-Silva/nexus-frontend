import { Component } from '@angular/core';
import { Atribuicao } from '../atribuicao';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';

@Component({
  selector: 'app-atribuicoes-detalhes',
  templateUrl: './atribuicoes-detalhes.component.html',
  styleUrl: './atribuicoes-detalhes.component.scss'
})
export class AtribuicoesDetalhesComponent {
  atribuicao: Atribuicao = new Atribuicao("1", "Aprovar requisição", "Aprove a descrição conforme dito.", 
  new ReferenciaObjeto("2", "Paulo Silva"), 0, new Date(2024, 1, 1), false, 
  new ReferenciaObjeto("566", "Access Point"), new Date(2024, 1, 1), 
  new ReferenciaObjeto("3", "Paulo Silva"), new ReferenciaObjeto("4", "Paulo Silva"), 
  new Date(2024, 1, 1))
}
