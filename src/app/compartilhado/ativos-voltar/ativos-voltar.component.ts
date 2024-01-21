import { Component, Input } from '@angular/core';

@Component({
  selector: 'nexus-ativos-voltar',
  templateUrl: './ativos-voltar.component.html',
  styleUrl: './ativos-voltar.component.scss'
})
export class AtivosVoltarComponent {
  //Nome do icone do angular material.
  @Input()
  icone: string = ''

  //Nome do conjunto de ativos.
  @Input()
  nome: string = ''
}
