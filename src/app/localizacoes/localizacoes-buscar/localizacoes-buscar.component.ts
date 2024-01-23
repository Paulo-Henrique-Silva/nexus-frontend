import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-localizacoes-buscar',
  templateUrl: './localizacoes-buscar.component.html',
  styleUrl: './localizacoes-buscar.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: LocalizacoesBuscarComponent }
  ]
})
export class LocalizacoesBuscarComponent extends MatPaginatorIntl {
  colunas: string[] = ['position', 'name', 'weight', 'symbol', 'descobridor', 'apelido', 'eRadioativo', 'dataDescobrimento'];
  colunasMostrarComo : string[] = [ 'Posição', 'Nome', 'Peso (KG)', 'Símbolo', 'Descobridor', 'Apelido', 'Radiotativo?', 'Data de Descobrimento']
  dados = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) 
  paginator?: MatPaginator;
  
  @ViewChild(MatSort) 
  sort?: MatSort;

  override itemsPerPageLabel = 'Itens por página:';
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Última página';
  
  clicouParaVerAcoes: boolean = false

  ngAfterViewInit() {
    this.dados = new MatTableDataSource<any>(this.obterDadosTratados());

    if (this.paginator && this.sort) {
      this.dados.paginator = this.paginator;
      this.dados.sort = this.sort;
    }
  }

  //Aqui será feita o tratamento dos dados para que sejam mostrados na tabela.
  obterDadosTratados() {
    let dadosTratados: any[] = ELEMENT_DATA;
    const pipe = new DatePipe('en-US');

    dadosTratados.forEach(dado => 
      dado['dataDescobrimento'] = pipe.transform(dado['dataDescobrimento'], 'dd/MM/yyyy hh:mm:ss'));

    console.log(dadosTratados);

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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  descobridor: string;
  apelido: string;
  eRadioativo: boolean;
  dataDescobrimento: Date;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', descobridor: 'Paulo Silva', apelido: 'Hidro', eRadioativo: false, dataDescobrimento: new Date('1766-01-01')},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', descobridor: 'Unknown', apelido: 'Hélio', eRadioativo: false, dataDescobrimento: new Date('1868-01-01')},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', descobridor: 'Unknown', apelido: 'Lítio', eRadioativo: false, dataDescobrimento: new Date('1817-01-01')},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', descobridor: 'Unknown', apelido: 'Berílio', eRadioativo: false, dataDescobrimento: new Date('1798-01-01')},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', descobridor: 'Unknown', apelido: 'Boro', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', descobridor: 'Unknown', apelido: 'Carbono', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', descobridor: 'Unknown', apelido: 'Nitrogênio', eRadioativo: false, dataDescobrimento: new Date('1772-01-01')},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', descobridor: 'Unknown', apelido: 'Oxigênio', eRadioativo: false, dataDescobrimento: new Date('1774-01-01')},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', descobridor: 'Unknown', apelido: 'Flúor', eRadioativo: false, dataDescobrimento: new Date('1886-01-01')},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', descobridor: 'Unknown', apelido: 'Neônio', eRadioativo: false, dataDescobrimento: new Date('1898-01-01')},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', descobridor: 'Unknown', apelido: 'Sódio', eRadioativo: false, dataDescobrimento: new Date('1807-01-01')},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', descobridor: 'Unknown', apelido: 'Magnésio', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', descobridor: 'Unknown', apelido: 'Alumínio', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')}, 
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', descobridor: 'Unknown', apelido: 'Silício', eRadioativo: false, dataDescobrimento: new Date('1824-01-01')},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', descobridor: 'Unknown', apelido: 'Fósforo', eRadioativo: false, dataDescobrimento: new Date('1669-01-01')},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', descobridor: 'Unknown', apelido: 'Enxofre', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')}, 
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', descobridor: 'Unknown', apelido: 'Cloro', eRadioativo: false, dataDescobrimento: new Date('1774-01-01')},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', descobridor: 'Unknown', apelido: 'Argônio', eRadioativo: false, dataDescobrimento: new Date('1894-01-01')},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', descobridor: 'Unknown', apelido: 'Potássio', eRadioativo: false, dataDescobrimento: new Date('1807-01-01')},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', descobridor: 'Unknown', apelido: 'Cálcio', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')}, 
  {position: 21, name: 'Scandium', weight: 44.9559, symbol: 'Sc', descobridor: 'Unknown', apelido: 'Escândio', eRadioativo: false, dataDescobrimento: new Date('1879-01-01')},
  {position: 22, name: 'Titanium', weight: 47.867, symbol: 'Ti', descobridor: 'Unknown', apelido: 'Titânio', eRadioativo: false, dataDescobrimento: new Date('1791-01-01')},
  {position: 23, name: 'Vanadium', weight: 50.9415, symbol: 'V', descobridor: 'Unknown', apelido: 'Vanádio', eRadioativo: false, dataDescobrimento: new Date('1801-01-01')},
  {position: 24, name: 'Chromium', weight: 51.9961, symbol: 'Cr', descobridor: 'Unknown', apelido: 'Crômio', eRadioativo: false, dataDescobrimento: new Date('1797-01-01')},
  {position: 25, name: 'Manganese', weight: 54.938, symbol: 'Mn', descobridor: 'Unknown', apelido: 'Manganês', eRadioativo: false, dataDescobrimento: new Date('1774-01-01')},
  {position: 26, name: 'Iron', weight: 55.845, symbol: 'Fe', descobridor: 'Unknown', apelido: 'Ferro', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 27, name: 'Cobalt', weight: 58.9332, symbol: 'Co', descobridor: 'Unknown', apelido: 'Cobalto', eRadioativo: false, dataDescobrimento: new Date('1735-01-01')},
  {position: 28, name: 'Nickel', weight: 58.6934, symbol: 'Ni', descobridor: 'Unknown', apelido: 'Níquel', eRadioativo: false, dataDescobrimento: new Date('1751-01-01')},
  {position: 29, name: 'Copper', weight: 63.546, symbol: 'Cu', descobridor: 'Unknown', apelido: 'Cobre', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 30, name: 'Zinc', weight: 65.38, symbol: 'Zn', descobridor: 'Unknown', apelido: 'Zinco', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 31, name: 'Gallium', weight: 69.723, symbol: 'Ga', descobridor: 'Unknown', apelido: 'Gálio', eRadioativo: false, dataDescobrimento: new Date('1875-01-01')},
  {position: 32, name: 'Germanium', weight: 72.63, symbol: 'Ge', descobridor: 'Unknown', apelido: ' Germânio', eRadioativo: false, dataDescobrimento: new Date('1886-01-01')},
  {position: 33, name: 'Arsenic', weight: 74.9216, symbol: 'As', descobridor: 'Unknown', apelido: 'Arsênio', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 34, name: 'Selenium', weight: 78.971, symbol: 'Se', descobridor: 'Unknown', apelido: 'Selênio', eRadioativo: false, dataDescobrimento: new Date('1817-01-01')},
  {position: 35, name: 'Bromine', weight: 79.904, symbol: 'Br', descobridor: 'Unknown', apelido: 'Bromo', eRadioativo: false, dataDescobrimento: new Date('1826-01-01')},
  {position: 36, name: 'Krypton', weight: 83.798, symbol: 'Kr', descobridor: 'Unknown', apelido: 'Crípton', eRadioativo: false, dataDescobrimento: new Date('1898-01-01')},
  {position: 37, name: 'Rubidium', weight: 85.4678, symbol: 'Rb', descobridor: 'Unknown', apelido: 'Rubídio', eRadioativo: false, dataDescobrimento: new Date('1861-01-01')},
  {position: 38, name: 'Strontium', weight: 87.62, symbol: 'Sr', descobridor: 'Unknown', apelido: 'Estrôncio', eRadioativo: false, dataDescobrimento: new Date('1790-01-01')},
  {position: 39, name: 'Yttrium', weight: 88.9058, symbol: 'Y', descobridor: 'Unknown', apelido: 'Ítrio', eRadioativo: false, dataDescobrimento: new Date('1794-01-01')},
  {position: 40, name: 'Zirconium', weight: 91.224, symbol: 'Zr', descobridor: 'Unknown', apelido: 'Zircônio', eRadioativo: false, dataDescobrimento: new Date('1789-01-01')},
  {position: 41, name: 'Niobium', weight: 92.9064, symbol: 'Nb', descobridor: 'Unknown', apelido: 'Nióbio', eRadioativo: false, dataDescobrimento: new Date('1801-01-01')},
  {position: 42, name: 'Molybdenum', weight: 95.94, symbol: 'Mo', descobridor: 'Unknown', apelido: 'Molibdênio', eRadioativo: false, dataDescobrimento: new Date('1778-01-01')},
  {position: 43, name: 'Technetium', weight: 98, symbol: 'Tc', descobridor: 'Unknown', apelido: 'Tecnécio', eRadioativo: true, dataDescobrimento: new Date('1937-01-01')},
  {position: 44, name: 'Ruthenium', weight: 101.07, symbol: 'Ru', descobridor: 'Unknown', apelido: 'Rutênio', eRadioativo: false, dataDescobrimento: new Date('1844-01-01')},
  {position: 45, name: 'Rhodium', weight: 102.9055, symbol: 'Rh', descobridor: 'Unknown', apelido: 'Ródio', eRadioativo: false, dataDescobrimento: new Date('1803-01-01')},
  {position: 46, name: 'Palladium', weight: 106.42, symbol: 'Pd', descobridor: 'Unknown', apelido: 'Paládio', eRadioativo: false, dataDescobrimento: new Date('1803-01-01')},
  {position: 47, name: 'Silver', weight: 107.8682, symbol: 'Ag', descobridor: 'Unknown', apelido: 'Prata', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 48, name: 'Cadmium', weight: 112.414, symbol: 'Cd', descobridor: 'Unknown', apelido: 'Cádmio', eRadioativo: false, dataDescobrimento: new Date('1817-01-01')},
  {position: 49, name: 'Indium', weight: 114.818, symbol: 'In', descobridor: 'Unknown', apelido: 'Índio', eRadioativo: false, dataDescobrimento: new Date('1863-01-01')},
  {position: 50, name: 'Tin', weight: 118.71, symbol: 'Sn', descobridor: 'Unknown', apelido: 'Estanho', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 51, name: 'Antimony', weight: 121.76, symbol: 'Sb', descobridor: 'Unknown', apelido: 'Antimônio', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 52, name: 'Tellurium', weight: 127.6, symbol: 'Te', descobridor: 'Unknown', apelido: 'Telúrio', eRadioativo: false, dataDescobrimento: new Date('1782-01-01')},
  {position: 53, name: 'Iodine', weight: 126.9045, symbol: 'I', descobridor: 'Unknown', apelido: 'Iodo', eRadioativo: false, dataDescobrimento: new Date('1811-01-01')},
  {position: 54, name: 'Xenon', weight: 131.293, symbol: 'Xe', descobridor: 'Unknown', apelido: 'Xenônio', eRadioativo: false, dataDescobrimento: new Date('1898-01-01')},
  {position: 55, name: 'Cesium', weight: 132.9055, symbol: 'Cs', descobridor: 'Unknown', apelido: 'Césio', eRadioativo: false, dataDescobrimento: new Date('1860-01-01')},
  {position: 56, name: 'Barium', weight: 137.327, symbol: 'Ba', descobridor: 'Unknown', apelido: 'Bário', eRadioativo: false, dataDescobrimento: new Date('1808-01-01')},
  {position: 57, name: 'Lanthanum', weight: 138.9055, symbol: 'La', descobridor: 'Unknown', apelido: 'Lantânio', eRadioativo: false, dataDescobrimento: new Date('1839-01-01')},
  {position: 58, name: 'Cerium', weight: 140.116, symbol: 'Ce', descobridor: 'Unknown', apelido: 'Cério', eRadioativo: false, dataDescobrimento: new Date('1803-01-01')},
  {position: 59, name: 'Praseodymium', weight: 140.9077, symbol: 'Pr', descobridor: 'Unknown', apelido: 'Praseodímio', eRadioativo: false, dataDescobrimento: new Date('1885-01-01')},
  {position: 60, name: 'Neodymium', weight: 144.242, symbol: 'Nd', descobridor: 'Unknown', apelido: 'Neodímio', eRadioativo: false, dataDescobrimento: new Date('1885-01-01')},
  {position: 61, name: 'Promethium', weight: 145, symbol: 'Pm', descobridor: 'Unknown', apelido: 'Promécio', eRadioativo: true, dataDescobrimento: new Date('1945-01-01')},
  {position: 62, name: 'Samarium', weight: 150.36, symbol: 'Sm', descobridor: 'Unknown', apelido: 'Samário', eRadioativo: false, dataDescobrimento: new Date('1853-01-01')},
  {position: 63, name: 'Europium', weight: 151.965, symbol: 'Eu', descobridor: 'Unknown', apelido: 'Európio', eRadioativo: false, dataDescobrimento: new Date('1901-01-01')},
  {position: 64, name: 'Gadolinium', weight: 157.25, symbol: 'Gd', descobridor: 'Unknown', apelido: 'Gadolínio', eRadioativo: false, dataDescobrimento: new Date('1880-01-01')},
  {position: 65, name: 'Terbium', weight: 158.9253, symbol: 'Tb', descobridor: 'Unknown', apelido: 'Térbio', eRadioativo: false, dataDescobrimento: new Date('1843-01-01')},
  {position: 66, name: 'Dysprosium', weight: 162.5, symbol: 'Dy', descobridor: 'Unknown', apelido: 'Disprósio', eRadioativo: false, dataDescobrimento: new Date('1886-01-01')},
  {position: 67, name: 'Holmium', weight: 164.9303, symbol: 'Ho', descobridor: 'Unknown', apelido: 'Hólmio', eRadioativo: false, dataDescobrimento: new Date('1878-01-01')},
  {position: 68, name: 'Erbium', weight: 167.259, symbol: 'Er', descobridor: 'Unknown', apelido: 'Érbio', eRadioativo: false, dataDescobrimento: new Date('1843-01-01')},
  {position: 69, name: 'Thulium', weight: 168.9342, symbol: 'Tm', descobridor: 'Unknown', apelido: 'Túlio', eRadioativo: false, dataDescobrimento: new Date('1879-01-01')},
  {position: 70, name: 'Ytterbium', weight: 173.045, symbol: 'Yb', descobridor: 'Unknown', apelido: 'Itérbio', eRadioativo: false, dataDescobrimento: new Date('1878-01-01')},
  {position: 71, name: 'Lutetium', weight: 174.9668, symbol: 'Lu', descobridor: 'Unknown', apelido: 'Lutécio', eRadioativo: false, dataDescobrimento: new Date('1907-01-01')},
  {position: 72, name: 'Hafnium', weight: 178.49, symbol: 'Hf', descobridor: 'Unknown', apelido: 'Háfnio', eRadioativo: false, dataDescobrimento: new Date('1923-01-01')},
  {position: 73, name: 'Tantalum', weight: 180.9479, symbol: 'Ta', descobridor: 'Unknown', apelido: 'Tântalo', eRadioativo: false, dataDescobrimento: new Date('1802-01-01')},
  {position: 74, name: 'Tungsten', weight: 183.84, symbol: 'W', descobridor: 'Unknown', apelido: 'Tungstênio', eRadioativo: false, dataDescobrimento: new Date('1783-01-01')},
  {position: 75, name: 'Rhenium', weight: 186.207, symbol: 'Re', descobridor: 'Unknown', apelido: 'Rênio', eRadioativo: false, dataDescobrimento: new Date('1925-01-01')},
  {position: 76, name: 'Osmium', weight: 190.23, symbol: 'Os', descobridor: 'Unknown', apelido: 'Ósmio', eRadioativo: false, dataDescobrimento: new Date('1803-01-01')},
  {position: 77, name: 'Iridium', weight: 192.217, symbol: 'Ir', descobridor: 'Unknown', apelido: 'Irídio', eRadioativo: false, dataDescobrimento: new Date('1803-01-01')},
  {position: 78, name: 'Platinum', weight: 195.084, symbol: 'Pt', descobridor: 'Unknown', apelido: 'Platina', eRadioativo: false, dataDescobrimento: new Date('1735-01-01')},
  {position: 79, name: 'Gold', weight: 196.9666, symbol: 'Au', descobridor: 'Unknown', apelido: 'Ouro', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 80, name: 'Mercury', weight: 200.592, symbol: 'Hg', descobridor: 'Unknown', apelido: 'Mercúrio', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 81, name: 'Thallium', weight: 204.38, symbol: 'Tl', descobridor: 'Unknown', apelido: 'Tálio', eRadioativo: false, dataDescobrimento: new Date('1861-01-01')},
  {position: 82, name: 'Lead', weight: 207.2, symbol: 'Pb', descobridor: 'Unknown', apelido: 'Chumbo', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 83, name: 'Bismuth', weight: 208.9804, symbol: 'Bi', descobridor: 'Unknown', apelido: 'Bismuto', eRadioativo: false, dataDescobrimento: new Date('1903-04-19')},
  {position: 84, name: 'Polonium', weight: 209, symbol: 'Po', descobridor: 'Unknown', apelido: 'Polônio', eRadioativo: true, dataDescobrimento: new Date('1898-01-01')},
  {position: 85, name: 'Astatine', weight: 210, symbol: 'At', descobridor: 'Unknown', apelido: 'Ástato', eRadioativo: true, dataDescobrimento: new Date('1940-01-01')},
  {position: 86, name: 'Radon', weight: 222, symbol: 'Rn', descobridor: 'Unknown', apelido: 'Radônio', eRadioativo: true, dataDescobrimento: new Date('1900-01-01')},
  {position: 87, name: 'Francium', weight: 223, symbol: 'Fr', descobridor: 'Unknown', apelido: 'Frâncio', eRadioativo: true, dataDescobrimento: new Date('1939-01-01')},
  {position: 88, name: 'Radium', weight: 226, symbol: 'Ra', descobridor: 'Unknown', apelido: 'Rádio', eRadioativo: true, dataDescobrimento: new Date('1898-01-01')},
  {position: 89, name: 'Actinium', weight: 227, symbol: 'Ac', descobridor: 'Unknown', apelido: 'Actínio', eRadioativo: true, dataDescobrimento: new Date('1899-01-01')},
  {position: 90, name: 'Thorium', weight: 232.0377, symbol: 'Th', descobridor: 'Unknown', apelido: 'Tório', eRadioativo: false, dataDescobrimento: new Date('1828-01-01')},
  {position: 91, name: 'Protactinium', weight: 231.0359, symbol: 'Pa', descobridor: 'Unknown', apelido: 'Protactínio', eRadioativo: true, dataDescobrimento: new Date('1917-01-01')},
  {position: 92, name: 'Uranium', weight: 238.0289, symbol: 'U', descobridor: 'Unknown', apelido: 'Urânio', eRadioativo: true, dataDescobrimento: new Date('1789-01-01')},
  {position: 93, name: 'Neptunium', weight: 237, symbol: 'Np', descobridor: 'Unknown', apelido: 'Netúnio', eRadioativo: true, dataDescobrimento: new Date('1940-01-01')},
  {position: 94, name: 'Plutonium', weight: 244, symbol: 'Pu', descobridor: 'Unknown', apelido: 'Plutônio', eRadioativo: true, dataDescobrimento: new Date('1940-01-01')},
  {position: 95, name: 'Americium', weight: 243, symbol: 'Am', descobridor: 'Unknown', apelido: 'Amerício', eRadioativo: true, dataDescobrimento: new Date('1944-01-01')},
  {position: 96, name: 'Curium', weight: 247, symbol: 'Cm', descobridor: 'Unknown', apelido: 'Cúrio', eRadioativo: true, dataDescobrimento: new Date('1944-01-01')},
  {position: 97, name: 'Berkelium', weight: 247, symbol: 'Bk', descobridor: 'Unknown', apelido: 'Berquélio', eRadioativo: true, dataDescobrimento: new Date('1949-01-01')},
  {position: 98, name: 'Californium', weight: 251, symbol: 'Cf', descobridor: 'Unknown', apelido: 'Califórnio', eRadioativo: true, dataDescobrimento: new Date('1950-01-01')},
  {position: 99, name: 'Einsteinium', weight: 252, symbol: 'Es', descobridor: 'Unknown', apelido: 'Einstênio', eRadioativo: true, dataDescobrimento: new Date('1952-01-01')},
  {position: 100, name: 'Fermium', weight: 257, symbol: 'Fm', descobridor: 'Unknown', apelido: 'Férmio', eRadioativo: true, dataDescobrimento: new Date('1952-01-01')},
  {position: 101, name: 'Mendelevium', weight: 258, symbol: 'Md', descobridor: 'Unknown', apelido: 'Mendelévio', eRadioativo: true, dataDescobrimento: new Date('1955-01-01')},
  {position: 102, name: 'Nobelium', weight: 259, symbol: 'No', descobridor: 'Unknown', apelido: 'Nobélio', eRadioativo: true, dataDescobrimento: new Date('1957-01-01')},
  {position: 103, name: 'Lawrencium', weight: 262, symbol: 'Lr', descobridor: 'Unknown', apelido: 'Laurêncio', eRadioativo: true, dataDescobrimento: new Date('1961-01-01')},
  {position: 104, name: 'Rutherfordium', weight: 267, symbol: 'Rf', descobridor: 'Unknown', apelido: 'Rutherfórdio', eRadioativo: true, dataDescobrimento: new Date('1964-01-01')},
  {position: 105, name: 'Dubnium', weight: 270, symbol: 'Db', descobridor: 'Unknown', apelido: 'Dúbnio', eRadioativo: true, dataDescobrimento: new Date('1967-01-01')},
  {position: 106, name: 'Seaborgium', weight: 271, symbol: 'Sg', descobridor: 'Unknown', apelido: 'Seabórgio', eRadioativo: true, dataDescobrimento: new Date('1974-01-01')},
  {position: 107, name: 'Bohrium', weight: 270, symbol: 'Bh', descobridor: 'Unknown', apelido: 'Bório', eRadioativo: true, dataDescobrimento: new Date('1981-01-01')},
  {position: 108, name: 'Hassium', weight: 277, symbol: 'Hs', descobridor: 'Unknown', apelido: 'Hássio', eRadioativo: true, dataDescobrimento: new Date('1984-01-01')},
  {position: 109, name: 'Meitnerium', weight: 276, symbol: 'Mt', descobridor: 'Unknown', apelido: 'Meitnério', eRadioativo: true, dataDescobrimento: new Date('1982-01-01')},
  {position: 110, name: 'Darmstadtium', weight: 281, symbol: 'Ds', descobridor: 'Unknown', apelido: 'Darmstádio', eRadioativo: true, dataDescobrimento: new Date('1994-01-01')},
  {position: 111, name: 'Roentgenium', weight: 280, symbol: 'Rg', descobridor: 'Unknown', apelido: 'Roentgênio', eRadioativo: true, dataDescobrimento: new Date('1994-01-01')},
  {position: 112, name: 'Copernicium', weight: 285, symbol: 'Cn', descobridor: 'Unknown', apelido: 'Copernício', eRadioativo: true, dataDescobrimento: new Date('1996-01-01')},
  {position: 113, name: 'Nihonium', weight: 284, symbol: 'Nh', descobridor: 'Unknown', apelido: 'Nihônio', eRadioativo: true, dataDescobrimento: new Date('2003-01-01')},
  {position: 114, name: 'Flerovium', weight: 289, symbol: 'Fl', descobridor: 'Unknown', apelido: 'Flérovio', eRadioativo: true, dataDescobrimento: new Date('1998-01-01')},
  {position: 115, name: 'Moscovium', weight: 288, symbol: 'Mc', descobridor: 'Unknown', apelido: 'Moscóvio', eRadioativo: true, dataDescobrimento: new Date('2003-01-01')},
  {position: 116, name: 'Livermorium', weight: 293, symbol: 'Lv', descobridor: 'Unknown', apelido: 'Livermório', eRadioativo: true, dataDescobrimento: new Date('2000-01-01')},
  {position: 117, name: 'Tennessine', weight: 294, symbol: 'Ts', descobridor: 'Unknown', apelido: 'Tenessino', eRadioativo: true, dataDescobrimento: new Date('2010-01-01')},
  {position: 118, name: 'Oganesson', weight: 294, symbol: 'Og', descobridor: 'Unknown', apelido: 'Oganessônio', eRadioativo: true, dataDescobrimento: new Date('2002-01-01')},
];

