import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-atribuicoes-lista-vazia',
  templateUrl: './atribuicoes-lista-vazia.component.html',
  styleUrl: './atribuicoes-lista-vazia.component.scss'
})
export class AtribuicoesListaVaziaComponent {
  @Input()
  titulo: string = '';

  @Input()
  caminhoImagem: string = '';
}
