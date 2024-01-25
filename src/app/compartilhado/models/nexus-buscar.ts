import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, ViewChild } from "@angular/core";
import { MatPaginatorIntl, MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription, map } from "rxjs";
import { LocalizacoesService } from "../../localizacoes/localizacoes.service";
import { ReferenciaObjeto } from "./referencia-objeto";
import { NexusService } from "../services/nexus-service/nexus-service";
import { NexusEnvio } from "./nexus-envio";
import { NexusResposta } from "./nexus-resposta";

@Component({
    selector: 'nexus-buscar',
    template: '',
})
export abstract class NexusBuscar<T extends NexusEnvio, O extends NexusResposta> 
extends MatPaginatorIntl implements AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator) 
    paginator?: MatPaginator;
    
    @ViewChild(MatSort)
    sort?: MatSort;
  
    colunas: string[] = [ ];
    colunasMostrarComo : string[] = [ ];
  
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
    indexLinhaSelecionada: number = -1;
  
    constructor(
      private service: NexusService<T, O>
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
      let dadosTratados: any[];
      const pipe = new DatePipe('en-US');

      this.service.obterTudo(this.paginaAtual)
        .pipe(map((dados): any => dados))
        .subscribe(dados => {
          dadosTratados = dados;
          
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
        });
    }
  
    mostrarAcoes(linha: any, indexLinha: number) {
      this.objetoSelecionado = {
        UID: linha.UID,
        nome: linha.nome,
      };
  
      this.selecionouObjeto = !this.selecionouObjeto;
      
      //Caso haja um objeto selecinado, aplico o estilo na linha. Senão, marca o index como -1
      //para resetar os estilos na tabela.
      this.indexLinhaSelecionada = this.selecionouObjeto ? indexLinha : -1;
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