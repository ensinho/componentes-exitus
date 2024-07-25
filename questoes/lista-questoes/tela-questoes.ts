// Imports
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { ServiceinvoiceService } from '../questoes-service';
import { InvoiceList } from '../questoes';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

// DIalogs
import { AddedDialogComponent } from '../adicionar-questoes/added-dialog/added-dialog.component';
import { SaveViewDialogComponent } from './salvar-visao-dialog';
import { FilterDialogComponent } from './filter-dialog.component'; 

// Configurações do componente
@Component({
  selector: 'app-invoice-list',
  templateUrl: './tela-questoes.html',
  styleUrls: ['./tela-questoes.scss'],
})

// Componente que tem de ser importado no NgModule
export class AppInvoiceListComponent implements AfterViewInit {

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
  options: string[] = ['Texto da questão', 'Código da questão','Dificuldade', 'Categoria', 'Status'];
  filteredOptions: string[] = this.options;
  allComplete: boolean = false;

  invoiceList: MatTableDataSource<InvoiceList>;
  displayedColumns: string[] = ['Selecionadas', 'Codigo', 'Categoria', 'Curso', 'Tag', 'Dificuldade', 'Tipo', 'Status', 'Opções'];
  allColumns: string[] = ['Selecionadas', 'Codigo', 'Categoria', 'Curso', 'Tag', 'Dificuldade', 'Tipo', 'Status', 'Opções'];

  // Construtor
  constructor(public invoiceService: ServiceinvoiceService, public dialog: MatDialog, private router: Router) {
    this.invoiceList = new MatTableDataSource<InvoiceList>([]);
    this.totalLength = this.invoiceService.getInvoiceList().length;
  }

  // Inicialização
  ngAfterViewInit(): void {
    this.invoiceList.sort = this.sort;
    this.loadPageData(1); 
    this.loadSavedViews();
    this.loadDefaultView();
  }

  // Dialogo abrir questão
  openInvoiceDialog(invoiceId: string): void {
    const dialogRef = this.dialog.open(AddedDialogComponent, {
      width: '600px',
      data: { id: invoiceId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    const invoiceListData = this.invoiceService.getInvoiceList();
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.invoiceList.data = invoiceListData.slice(startIndex, endIndex);
  }

  // Mudar todas como completas
  updateAllComplete(): void {
    this.allComplete = this.invoiceList != null && this.invoiceList.data.every((t) => t.completed);
  }

  // Método para somente algumas completas
  someComplete(): boolean {
    return this.invoiceList.data.filter((t) => t.completed).length > 0 && !this.allComplete;
  }

  // Método definir todas
  setAll(completed: boolean): void {
    this.allComplete = completed;
    this.invoiceList.data.forEach((t) => (t.completed = completed));
  }

  // Filtro barra de pesquisa
  filter(filterValue: string): void {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
    this.invoiceList.filter = filterValue.trim().toLowerCase();
  }

  // Deletar questão
  deleteInvoice(row: number): void {
    if (confirm('Você quer realmente deletar a questão?')) {
      this.invoiceService.deleteInvoice(row);
      this.invoiceList.data = this.invoiceList.data.filter((invoice) => invoice.id !== row);
    }
  }

  // Método abrir modal de filtros
  openFilterDialog(option: string): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '300px',
      data: { option }
    });

    dialogRef.componentInstance.filterApplied.subscribe((filterText: string) => {
      if (this.searchInput) {
        this.searchInput.nativeElement.value = filterText;
      }
      this.searchInput.nativeElement.focus();
    });
  }
 
  //////// Manipulação das visões, filtro de colunas e visão padrão ////////
  columnOrder: string[] = ['Selecionadas', 'Codigo', 'Categoria', 'Curso', 'Tag', 'Dificuldade', 'Tipo', 'Status', 'Opções'];
  savedViews: string[] = [];
  defaultViewName: string | null = null;
  keepLastView: boolean = false;
  newViewName: string = '';
  activeView: string | null = null;
  exitusView: string | null = null;
  selectedCheckbox: string | null = null;

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

    // Método para salvar a visão atual
    saveCurrentView(): void {
      if (this.newViewName.trim()) {
        if (this.newViewName === 'defaultView') {
          console.warn('O nome "defaultView" é reservado e não pode ser usado.');
          return;
        }
  
        if (this.savedViews.includes(this.newViewName)) {
          console.warn(`A visão "${this.newViewName}" já existe.`);
          return;
        }
  
        localStorage.setItem(this.newViewName, JSON.stringify(this.displayedColumns));
        this.loadSavedViews();
        this.newViewName = '';
      } else {
        console.warn('Por favor, forneça um nome para a visão.');
      }
    }
  
    // Método para carregar uma visão salva
    loadView(viewName: string): void {
      const savedView = localStorage.getItem(viewName);
      if (savedView) {
        this.displayedColumns = JSON.parse(savedView);
        this.activeView = viewName;
      } else {
        console.warn('Visão não encontrada:', viewName);
      }
    }
  
    // Método de remover visão
    removeView(viewName: string): void {
      localStorage.removeItem(viewName);
      this.savedViews = this.savedViews.filter(view => view !== viewName);
      if (this.activeView === viewName) {
        this.activeView = null;
      }
      if (this.selectedCheckbox === viewName) {
        this.selectedCheckbox = null;
        this.setDefaultExitusView();
      }
    }

    // Função para carregar a visão padrão ao inicializar o componente
    loadDefaultView() {
      const defaultView = localStorage.getItem('defaultView');
      if (defaultView) {
        this.loadView(defaultView);
        this.selectedCheckbox = defaultView;
        this.activeView = defaultView;
      } else {
        this.setDefaultExitusView();
      }
    }

    // Método para carregar as visões salvas
    loadSavedViews(): void {
      this.savedViews = Object.keys(localStorage).filter(view => view !== 'defaultViewName' && view !== 'keepLastView' && view !== 'defaultView');
    }

    // Carregar visao exitus
    loadExitusView(): void {
      this.displayedColumns = ['Selecionadas', 'Codigo', 'Categoria', 'Curso', 'Tag', 'Dificuldade', 'Tipo', 'Status', 'Opções'];
      this.activeView = 'Exitus';
    }

    // Logica para checkbox interligados
    toggleCheckbox(view: string) {
      if (this.selectedCheckbox === view) {
        this.selectedCheckbox = null;
        localStorage.removeItem('defaultView');
        this.setDefaultExitusView();
      } else {
        this.selectedCheckbox = view;
        localStorage.setItem('defaultView', view);
        this.activeView = view;
      }
    }

    // logica para definir visao exitus padrao
    setDefaultExitusView() {
      this.selectedCheckbox = 'Exitus';
      this.activeView = 'Exitus';
      localStorage.setItem('defaultView', 'Exitus');
      this.loadExitusView();
    }

    // logica para abrir dialogo salvar
    openSaveViewDialog(): void {
      const dialogRef = this.dialog.open(SaveViewDialogComponent, {
        width: '270px',
        data: { viewName: this.newViewName }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newViewName = result;
          this.saveCurrentView();
        }
      });
    }

}
