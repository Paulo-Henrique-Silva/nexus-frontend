import { Component } from '@angular/core';
import { ReferenciaObjeto } from '../../compartilhado/referencia-objeto';
import { Atribuicao } from '../atribuicao';

@Component({
  selector: 'nexus-atribuicoes-lista',
  templateUrl: './atribuicoes-lista.component.html',
  styleUrl: './atribuicoes-lista.component.scss'
})
export class AtribuicoesListaComponent {
  atribuicoes: Atribuicao[] = [
    new Atribuicao("1", "Aprovar requisição", "Aprove a descrição conforme dito.", 
    new ReferenciaObjeto("2", "Paulo Silva"), 0, new Date(2024, 1, 1), false, 
    new ReferenciaObjeto("566", "Access Point"), new Date(2024, 1, 1), 
    new ReferenciaObjeto("3", "Paulo Silva"), new ReferenciaObjeto("4", "Paulo Silva"), 
    new Date(2024, 1, 1)),
    new Atribuicao("1", "Analisar Texto", "Aprove a descrição conforme dito.", 
    new ReferenciaObjeto("2", "Paulo Silva"), 0, new Date(2024, 1, 1), false, 
    new ReferenciaObjeto("566", "Access Point"), new Date(2024, 1, 1), 
    new ReferenciaObjeto("3", "Paulo Silva"), new ReferenciaObjeto("4", "Paulo Silva"), 
    new Date(2024, 1, 1)),
  ]
}
