import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NexusBuscar } from '../../compartilhado/models/componentes/nexus-buscar';
import { SessaoService } from '../../compartilhado/services/sessao/sessao.service';
import { UsuariosService } from '../../login/usuarios.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios-buscar',
  templateUrl: './usuarios-buscar.component.html',
  styleUrl: './usuarios-buscar.component.scss'
})
export class UsuariosBuscarComponent extends NexusBuscar {

  override colunas: string[] = [ 
    'nome', 'nomeAcesso', 'atualizadoPor', 'dataUltimaAtualizacao',
    'usuarioCriador', 'dataCriacao'
  ];
  override colunasMostrarComo : string[] = [ 
    'Nome', 'Nome de Acesso', 'Atualizado por', 'Data Última Atualização',
    'Usuário Criador', 'Data Criação'
  ];

  constructor(
    snackBar: MatSnackBar,
    sessaoService: SessaoService,
    service: UsuariosService
  ) {
    super(snackBar, sessaoService);
    this.service = service;
  }

  //Override para itens que não são de projetos.
  override carregarTabela(nomePesquisa?: string | null): void {
    this.carregando = true;
    const projetoUID = this.sessaoService.projetoSelecionado.uid;

    if (nomePesquisa != null) {
      this.tabelaFoiFiltrada = true;
      this.nomeFiltro = nomePesquisa;
    }

    this.service.obterTudo(this.paginaAtual + 1, nomePesquisa)
    .subscribe({
      next: (dados: any) => {
        const pipe = new DatePipe('en-US');

        const dadosTratados: any[] = dados.itens;
        this.totalItens = dados.totalItens;
      
        dadosTratados.forEach(dado => {
          for (const propriedade in dado) {
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
}
