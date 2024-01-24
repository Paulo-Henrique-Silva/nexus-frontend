import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalizacoesService } from '../localizacoes.service';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends MatPaginatorIntl {
  @ViewChild(MatPaginator) 
  paginator?: MatPaginator;
  
  @ViewChild(MatSort) 
  sort?: MatSort;

  colunas: string[] = [ 
    'nome', 'descricao', 'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  colunasMostrarComo : string[] = [ 
    'Nome', 'Descrição', 'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  dados = new MatTableDataSource<any>();
  
  override itemsPerPageLabel = 'Itens por página:';
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Última página';
  
  clicouParaVerAcoes: boolean = false;

  constructor(
    private localizacaoService: LocalizacoesService
  ) {
    super();
    this.dados = new MatTableDataSource<any>(this.obterDadosTratados());

    if (this.paginator && this.sort) {
      this.dados.paginator = this.paginator;
      this.dados.sort = this.sort;
    }
  }

  ngAfterViewInit() {
    
  }

  //Aqui será feita o tratamento dos dados para que sejam mostrados na tabela.
  obterDadosTratados() {
    let dadosTratados: any[] = this.localizacaoService.obterTudo(1);
    const pipe = new DatePipe('en-US');

    dadosTratados.forEach(dado => {
      for (let propriedade in dado) {
        //Se for uma data, converte o valor para algo legível.
        if (dado[propriedade] instanceof Date) {
          dado[propriedade] = pipe.transform(dado[propriedade], 'dd/MM/yyyy hh:mm:ss');
        }

        //Se for uma referência, retorna o nome do objeto.
        if (dado[propriedade] instanceof Object) {
          dado[propriedade] = dado[propriedade].nome;
        }
      }
    })

    return dadosTratados;
  }

  mostarAcoes() {
    this.clicouParaVerAcoes = !this.clicouParaVerAcoes
  }

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
}