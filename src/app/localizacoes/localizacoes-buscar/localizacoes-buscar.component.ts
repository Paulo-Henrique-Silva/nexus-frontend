import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalizacoesService } from '../localizacoes.service';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { Subscription } from 'rxjs';
import { LocalizacaoResposta } from '../models/localizacao-resposta';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends MatPaginatorIntl implements AfterViewInit, OnDestroy {
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

  dadosTabela: MatTableDataSource<any> = new MatTableDataSource<any>();
  
  override itemsPerPageLabel = 'Itens por página:';
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Última página';
  
  objetoSelecionado: ReferenciaObjeto = new ReferenciaObjeto();
  selecionouObjeto: boolean = false;
  paginaAtual: number = 1;
  inscricaoPaginator: Subscription = new Subscription();

  constructor(
    private localizacaoService: LocalizacoesService
  ) {
    super();
  }

  ngAfterViewInit() {
    this.carregarTabela();
    
    if (this.paginator && this.sort) {
      this.dadosTabela.paginator = this.paginator;
      this.dadosTabela.sort = this.sort;

      this.inscricaoPaginator = this.paginator.page
       .subscribe(resultado => this.paginaAtual = resultado.pageIndex);
    }
  }
  
  ngOnDestroy(): void {
    this.inscricaoPaginator.unsubscribe();
  }

  //Aqui será feita o tratamento dos dados para que sejam mostrados na tabela.
  carregarTabela() {
    let dadosTratados: any[] = this.localizacaoService.obterTudo(this.paginaAtual);
    const pipe = new DatePipe('en-US');
 
    dadosTratados.forEach(dado => {
      for (let propriedade in dado) {
        //Se for uma data, converte o valor para algo legível.
        if (dado[propriedade] instanceof Date) {
          dado[propriedade] = pipe.transform(dado[propriedade], 'dd/MM/yyyy HH:mm:ss');
        }

        //Se for uma referência, retorna o nome do objeto.
        if (dado[propriedade] instanceof Object) {
          dado[propriedade] = dado[propriedade].nome;
        }
      }
    })

    this.selecionouObjeto = false;
    this.dadosTabela = new MatTableDataSource<any>(dadosTratados);
  }

  mostrarAcoes(linha: any) {
    this.objetoSelecionado = {
      UID: linha.UID,
      nome: linha.nome,
    };

    this.selecionouObjeto = !this.selecionouObjeto;
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