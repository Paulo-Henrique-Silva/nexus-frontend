import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalizacoesService } from '../localizacoes.service';
import { ReferenciaObjeto } from '../../compartilhado/models/referencia-objeto';
import { Subscription, delay } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends MatPaginatorIntl implements OnInit, DoCheck, OnDestroy {
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

  //Guarda a página para fazer requisições.
  inscricaoPaginator: Subscription = new Subscription();

  //começa no zero, pois o paginator também inicia no zero.
  paginaAtual: number = 0;
  totalItens: number = 0;
  tamanhoPagina: number = 25;

  //Nome que será usado na pesquisa
  nomePesquisa: string = '';

  indexLinhaSelecionada: number = -1;

  carregando: boolean = true;

  constructor(
    private localizacaoService: LocalizacoesService,
    private snackBar: MatSnackBar,
    private sessaoService: SessaoService
  ) {
    super();
  }
  
  ngOnInit(): void {
    this.carregarTabela();
  }
  
  ngDoCheck(): void {
    //Após o carregamento da tabela, carrega o sort.
    if (this.sort && !this.dadosTabela.sort) {
      this.dadosTabela.sort = this.sort;
    }
  }

  ngOnDestroy(): void {
  }

  //Aqui será feita o tratamento dos dados para que sejam mostrados na tabela.
  carregarTabela(nomePesquisa: string | null = null): void {
    this.carregando = true;
    const projetoUID = this.sessaoService.projetoSelecionado.uid;

    this.localizacaoService.obterTudoPorProjetoUID(this.paginaAtual + 1, projetoUID, nomePesquisa)
    .subscribe({
      next: (dados) => {
        console.log(dados);
        const pipe = new DatePipe('en-US');

        let dadosTratados: any[] = dados.itens;
        this.totalItens = dados.totalItens;
      
        dadosTratados.forEach(dado => {
          for (let propriedade in dado) {
            //Se for data, converte para uma string legível.
            if (this.eData(dado[propriedade])) {
              dado[propriedade] = pipe
                .transform(dado[propriedade], 'dd/MM/yyyy HH:mm:ss');
            }
    
            //Se for uma referência, retorna o nome do objeto.
            if (dado[propriedade] instanceof Object) {
              dado[propriedade] = dado[propriedade].nome;
            }
          }
        })
    
        this.selecionouObjeto = false;
        this.carregando = false;
        this.dadosTabela = new MatTableDataSource<any>(dadosTratados);
      },
      error: () => {
        this.mostrarSnackBarOk('Não foi possível carregar as informações.');
      }
    });
  }

  mostrarAcoes(linha: any, indexLinha: number): void {
    this.objetoSelecionado = {
      uid: linha.uid,
      nome: linha.nome,
    };

    this.selecionouObjeto = !this.selecionouObjeto;

    //Caso haja um objeto selecinado, aplico o estilo na linha. Senão, marca o index como -1
    //para resetar os estilos na tabela.
    this.indexLinhaSelecionada = this.selecionouObjeto ? indexLinha : -1;
  }

  mudarPagina(event: any): void {
    this.selecionouObjeto = false;
    let paginaIndex = event.pageIndex;

    if (paginaIndex == 0) {
      this.paginaAtual = 0;
    }
    else if (paginaIndex == this.paginaAtual + 1) {
      this.paginaAtual++;
    }
    else if (paginaIndex < this.paginaAtual) {
      this.paginaAtual--;
    }
    else { //caso o usuário tenha clicado para ir à ultima página.

      //Faz o cálculo da últimap página.
      this.paginaAtual = Math.floor(this.totalItens / this.tamanhoPagina);
    }

    this.carregarTabela();
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

  mostrarSnackBarOk(texto: string): void {
    this.snackBar.open(texto, 'Ok')._dismissAfter(3000);
  }

  //checa se é data no formato retornado pela API.
  eData(texto: string): boolean {
    const regexData: RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?$/;
    return regexData.test(texto);
  }
}