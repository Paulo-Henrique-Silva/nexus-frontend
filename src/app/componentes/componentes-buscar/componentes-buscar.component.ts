import { Component } from '@angular/core';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { ComponentesService } from '../componentes.service';

@Component({
  selector: 'app-componentes-buscar',
  templateUrl: './componentes-buscar.component.html',
  styleUrl: './componentes-buscar.component.scss'
})
export class ComponentesBuscarComponent extends NexusBuscar {
  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: ComponentesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}
