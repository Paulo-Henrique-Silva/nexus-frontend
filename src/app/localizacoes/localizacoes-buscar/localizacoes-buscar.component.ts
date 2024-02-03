import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, DoCheck, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalizacoesService } from '../localizacoes.service';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { Subscription, delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { NexusBuscar } from '../../compartilhado/models/nexus-buscar';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends NexusBuscar {

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: LocalizacoesService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }
}