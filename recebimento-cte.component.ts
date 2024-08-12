import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialog,
} from '@angular/material/dialog';
import {  AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { RecebimentoCTEService } from './recebimento-cte-service';  
import { RecebimentoCTEList } from './recebimento-cte'; 

@Component({
  selector: 'app-layout',
  templateUrl: './recebimento-cte.html',
  styleUrls: ['./recebimento-cte.scss'],
})


// Componente que tem de ser importado no NgModule
export class AppRecebimentoCTEComponent implements AfterViewInit {

  //// Views ////
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('visaonav') visaonav: MatSidenav;
  @ViewChild('meioCirculoButton') meioCirculoButton: ElementRef;
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  @ViewChild(MatSort) sort: MatSort = Object.create(null);

  //// Elementod da questão ////
  codigoquestao: string;
  categoriaquestao: string;
  cursoquestao: string;
  dificuldadequestao: string;
  statusquestao: string;


  // Método conferir evento
  logEvent(index: boolean): string {
    return index ? 'tab_ativa' : ' tab_inativa'
  }

  // Método abrir aba lateral, com seus elementos.
  openSidenav(invoiceId: string, invoiceCategoria: string, invoiceCurso: string, InvoiceDificuldade:string, InvoiceStatus:string): void {
    this.codigoquestao = invoiceId;
    this.categoriaquestao = invoiceCategoria;
    this.cursoquestao = invoiceCurso;
    this.dificuldadequestao = InvoiceDificuldade;
    this.statusquestao = InvoiceStatus;
    this.sidenav.open();
  }

  // Método fechar aba lateral
  closeSidenav(): void {
    this.sidenav.close();
  }

  // Método abrir aba visão
  openvisaoNav(): void {
    this.visaonav.open()
  }

  // Método fechar aba visão
  closevisaonav(): void {
    this.visaonav.close()
  }

  // Conferir tab ativa
  isActive = true;
  toggleButton() {
    this.isActive = !this.isActive;
  }

  // Nao fechar o menu
  handleLabelClick(event: MouseEvent) {
    event.stopPropagation();
  }

  // Método para navegar entre abas ( add questão )
  handleOptionClick(tab: string, option: string) {
    console.log('Tab:', tab, 'Option:', option);
    if (tab === 'aberta') {
      this.router.navigate(['/apps/add-aberta'], { queryParams: { option: option } });
    } else if (tab === 'discursiva') {
      this.router.navigate(['/apps/add-discursiva'], { queryParams: { option: option } });
    } else if (tab === 'multipla') {
      this.router.navigate(['/apps/add-multipla'], { queryParams: { option: option } });
    }
  }

  // Método ir para a questão
  gotoquestao() {
    this.router.navigate(['/apps/viewInvoice/:id'], { });
  }
  

  //////// Variáveis da barra de questões e sua tela ////////
  searchText: string = ''
  appliedFilters: string[] = [];

  totalLength = 0;
  pageSize = 10;
  allComplete: boolean = false;

  RecebimentoList: MatTableDataSource<RecebimentoCTEList>;
  displayedColumns: string[] = [ 'Selecionar','numero', 'avaliacao','turma','tipoAvaliacao','elaborador','dataAvaliacao','Status', 'Opções'];
  allColumns: string[] =  [ 'Selecionar','numero', 'avaliacao','turma','tipoAvaliacao','elaborador','dataAvaliacao','Modelo','Número de Copias','Data de criação','Data de envio para Secretaria','Data de recebimento','Cor da impressão','Tipo da impressão','Gráfica','Secretaria','Status', 'Opções'];

  // Construtor
  constructor(public recebimentoService: RecebimentoCTEService, public dialog: MatDialog, private router: Router) {
    this.RecebimentoList = new MatTableDataSource<RecebimentoCTEList>([]);
    this.totalLength = this.recebimentoService.getInstrucaoList().length;
  }

    // Mudar todas como completas
    updateAllComplete(): void {
      this.allComplete = this.RecebimentoList != null && this.RecebimentoList.data.every((t) => t.completed);
    }

  // Método para somente algumas completas
  someComplete(): boolean {
    return this.RecebimentoList.data.filter((t) => t.completed).length > 0 && !this.allComplete;
  }

  // Método definir todas
  setAll(completed: boolean): void {
    this.allComplete = completed;
    this.RecebimentoList.data.forEach((t) => (t.completed = completed));
  }

  // Inicialização
  ngAfterViewInit(): void {
    this.RecebimentoList.sort = this.sort;
    this.loadPageData(1); 
  }

  // Método de mudança de página
  onPageChange(page: number): void {
    this.loadPageData(page);
  }

  // Itens por página
  onPageSizeChange(newPageSize: number): void {
    this.pageSize = newPageSize;
    this.loadPageData(1); 
  }

  // Carregar dados da pagina
  loadPageData(page: number): void {
    const instrucaoListData = this.recebimentoService.getInstrucaoList();
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.RecebimentoList.data = instrucaoListData.slice(startIndex, endIndex);
  }

  //////// Manipulação das visões, filtro de colunas e visão padrão ////////
  columnOrder: string[] =  [ 'numero', 'avaliacao','turma','tipoAvaliacao','elaborador','dataAvaliacao','Modelo','Número de Copias','Data de criação','Data de envio para Secretaria','Data de recebimento','Cor da impressão','Tipo da impressão','Gráfica','Secretaria','Status', 'Opções'];

  // Método de manipular a coluna
  toggleColumn(column: string): void {
    const index = this.displayedColumns.indexOf(column);
    if (index === -1) {
      // Adiciona a coluna na ordem correta
      this.displayedColumns = this.columnOrder.filter(col => 
        this.displayedColumns.includes(col) || col === column
      );
    } else {
      // Remove a coluna
      this.displayedColumns = this.displayedColumns.filter(col => col !== column);
    }
  }

}


