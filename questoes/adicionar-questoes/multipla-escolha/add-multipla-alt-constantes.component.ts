import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl, UntypedFormArray, NgForm } from '@angular/forms';
import { order, InvoiceList } from '../../questoes';
import { ServiceinvoiceService } from '../../questoes-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddedDialogComponent } from '../added-dialog/added-dialog.component';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  expanded?: boolean;
}

export interface Task1 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks1?: Task1[];
  expanded?: boolean;
}

export interface Task2 {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks2?: Task2[];
  expanded?: boolean;
}

export interface Cursos {
  name: string;
  completed: boolean;
  color: ThemePalette;
  Cursos?: Cursos[];
  expanded?: boolean;
}
@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-multipla-alt-constantes.html',
  styleUrl: '../add-questoes.scss' 
  
})

export class AppAddInvoice3Component implements OnInit{

  afirmacoes: string[] = [''];
  alternativaslist: string[] = ['']

  selectedTab: string;
  labelPosition: 'Somente você' | 'Todos os usuários do exitus' = 'Todos os usuários do exitus';
  dificuldadePosition: 'Fácil' | 'Média' | 'Difícil';
  fontePosition: 'before' | 'after' = 'after';
  anexoPosition: 'before' | 'after' = 'after';
  afirmaPosition: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' = '1'; 
  referencPosition: 'sem' | 'com';

  addForm: UntypedFormGroup | any;
  rows: UntypedFormArray;
  invoice: InvoiceList = new InvoiceList();

  hide = true;
  hide2 = true;
  conhide = true;
  alignhide = true;
  option: string;

  @ViewChildren('afirmacaoElement') afirmacaoElements: QueryList<ElementRef>;
  @ViewChildren('alternativaElement') alternativaElements: QueryList<ElementRef>;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.option = params['option'] || 'Default Option';
    }); 
  }

  adicionarAfirmacao() {
    this.afirmacoes.push('');
    setTimeout(() => {
      const elements = this.afirmacaoElements.toArray();
      if (elements.length) {
        const lastElement = elements[elements.length - 1].nativeElement;
        lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 10);
  }

  removerAfirmacao() {
    const elements = this.afirmacaoElements.toArray();
    if (elements.length > 1) {
      this.afirmacoes.pop(); 
    }
    else {
      return
    }
  }

  getAlternativa(index: number): string {
    const alternativas: { [key: string]: string[] } = {
      '1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      '2': ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
      '3': ['a.', 'b.', 'c.', 'd.', 'e.', 'f.', 'g.', 'h.', 'i.', 'j.'],
      '4': ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.'],
      '5': ['a)', 'b)', 'c)', 'd)', 'e)', 'f)', 'g)', 'h)', 'i)', 'j)'],
      '6': ['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)', 'I)', 'J)'],
      '7': ['A(', 'B(', 'C(', 'D(', 'E(', 'F(', 'G(', 'H(', 'I(', 'J('],
      '8': ['Personalizado']
    };
    return alternativas[this.afirmaPosition][index] || '';
  }

  getActiveAlternativas(): string[] {
    const alternativas: { [key: string]: string[] } = {
      '1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      '2': ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
      '3': ['a.', 'b.', 'c.', 'd.', 'e.', 'f.', 'g.', 'h.', 'i.', 'j.'],
      '4': ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'I.', 'J.'],
      '5': ['a)', 'b)', 'c)', 'd)', 'e)', 'f)', 'g)', 'h)', 'i)', 'j)'],
      '6': ['A)', 'B)', 'C)', 'D)', 'E)', 'F)', 'G)', 'H)', 'I)', 'J)'],
      '7': ['A(', 'B(', 'C(', 'D(', 'E(', 'F(', 'G(', 'H(', 'I(', 'J('],
      '8': ['Personalizado']
    };
    return alternativas[this.afirmaPosition].slice(0, this.afirmacoes.length);
  }

  adicionarAlternativa() {
    this.alternativaslist.push('');
    setTimeout(() => {
      const elements = this.alternativaElements.toArray();
      if (elements.length) {
        const lastElement = elements[elements.length - 1].nativeElement;
        lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 10);
  }

  logEvent(index: boolean): string {
    return index ? 'tab_ativa' : ' tab_inativa'
  }
  ///////////////////////////////////////////////////////////////////////q

  cursos: Cursos = {
    name: 'Cursos',
    completed: false,
    color: 'accent',
    expanded: false, // Inicializa a propriedade expanded para false
    Cursos: [
      { name: '1ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '3ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '3ª SÉRIE / EM', completed: false, color: 'accent' },
      { name: '2ª SÉRIE / NA', completed: false, color: 'accent' },
      { name: '4º ANO / EF', completed: false, color: 'accent' },
      { name: '5º ANO / EF', completed: false, color: 'accent' },
      { name: '6º ANO / EF', completed: false, color: 'accent' },
      { name: '7º ANO / EF', completed: false, color: 'accent' },
      { name: '7º ANO / EF', completed: false, color: 'accent' },
      { name: '8º ANO / EF', completed: false, color: 'accent' },
      { name: '9º ANO / EF', completed: false, color: 'accent' },
      { name: '9º ANO / EF', completed: false, color: 'accent' },
    ],
  }

  task: Task = {
    name: 'Ciências da Natureza',
    completed: false,
    color: 'warn',
    expanded: false,
    subtasks: [
      { name: 'Biologia', completed: false, color: 'accent' },
      { name: 'Ciências', completed: false, color: 'accent' },
      { name: 'Física', completed: false, color: 'accent' },
    ],
  };

  task1: Task1 = {
    name: 'Ciências Humanas',
    completed: false,
    color: 'accent',
    expanded: false,
    subtasks1: [
      { name: 'Filosofia', completed: false, color: 'accent' },
      { name: 'Geografia', completed: false, color: 'accent' },
      { name: 'História', completed: false, color: 'accent' },
    ],
  };

  task2: Task2 = {
    name: 'Linguagens e Códigos',
    completed: false,
    color: 'accent',
    expanded: false,
    subtasks2: [
      { name: 'Artes', completed: false, color: 'accent' },
      { name: 'Educação física', completed: false, color: 'accent' },
      { name: 'Espanhol', completed: false, color: 'accent' },
      { name: 'Inglês', completed: false, color: 'accent' },
      { name: 'Literatura', completed: false, color: 'accent' },
      { name: 'Portugês', completed: false, color: 'accent' },
    ],
  };

  allComplete: boolean = false;

  allComplete1: boolean = false;

  allComplete2: boolean = false;


  updateTaskCompletion() {
    if (this.task.subtasks) {
      this.task.completed = this.task.subtasks.some(subtask => subtask.completed);    
      this.allComplete = this.task.completed;
    }
  }

  updateTaskCompletion1() {
    if (this.task1.subtasks1) {
      this.task1.completed = this.task1.subtasks1.some(subtask1 => subtask1.completed);    
      this.allComplete1 = this.task1.completed;
    }
  }

  updateTaskCompletion2() {
    if (this.task2.subtasks2) {
      this.task2.completed = this.task2.subtasks2.some(subtask2 => subtask2.completed);    
      this.allComplete2 = this.task2.completed;
    }
  }

  toggleTaskExpansion() {
    this.task.expanded = !this.task.expanded;
  }

  toggleTask1Expansion() {
    this.task1.expanded = !this.task1.expanded;
  }
  toggleTask2Expansion() {
    this.task2.expanded = !this.task2.expanded;
  }

  someComplete(): boolean {
    if (!this.task.subtasks || this.task.subtasks.length === 0) {
      return false;
    }
    return this.task.subtasks.some(subtask => subtask.completed) && !this.allComplete;
  }
  
  someComplete1(): boolean {
    if (!this.task1.subtasks1 || this.task1.subtasks1.length === 0) {
      return false;
    }
    return this.task1.subtasks1.some(subtask1 => subtask1.completed) && !this.allComplete;
  }

  someComplete2(): boolean {
    if (!this.task2.subtasks2 || this.task2.subtasks2.length === 0) {
      return false;
    }
    return this.task2.subtasks2.some(subtask2 => subtask2.completed) && !this.allComplete;
  }
  
  ///////////////////////////////////////////////////////////
  subTotal = 0;
  vat = 0;
  grandTotal = 0;

  constructor(
    private fb: UntypedFormBuilder,
    private invoiceService: ServiceinvoiceService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {

    
    // tslint:disable-next-line - Disables all
    this.invoice.id =
      Math.max.apply(
        Math,
        this.invoiceService.getInvoiceList().map(function (o: any) {
          return o.id;
        }),
      ) + 1;
    this.invoice.Tipo = 'Aberta';

    ///////////////////////////////////////////////////////////

    this.addForm = this.fb.group({});

    this.rows = this.fb.array([]);
    this.addForm.addControl('rows', this.rows);
    this.rows.push(this.createItemFormGroup());
    this.selectedTab = 'Classificação';    
  }

  isSelected(tab: string): boolean {
    return this.selectedTab === tab;
  }

  // Selecione a guia quando clicada
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  ////////////////////////////////////////////////////////////////////////////////////
  onAddRow(): void {
    this.rows.push(this.createItemFormGroup());
  }

  onRemoveRow(rowIndex: number): void {
    const totalCostOfItem =
      this.addForm.get('rows')?.value[rowIndex].unitPrice *
      this.addForm.get('rows')?.value[rowIndex].units;

    this.subTotal = this.subTotal - totalCostOfItem;
    this.vat = this.subTotal / 10;
    this.grandTotal = this.subTotal + this.vat;
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): UntypedFormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      units: ['', Validators.required],
      unitPrice: ['', Validators.required],
      itemTotal: ['0'],
    });
  }

  itemsChanged(): void {
    let total: number = 0;
    // tslint:disable-next-line - Disables all
    for (let t = 0; t < (<UntypedFormArray>this.addForm.get('rows')).length; t++) {
      if (
        this.addForm.get('rows')?.value[t].unitPrice !== '' &&
        this.addForm.get('rows')?.value[t].units
      ) {
        total =
          this.addForm.get('rows')?.value[t].unitPrice * this.addForm.get('rows')?.value[t].units +
          total;
      }
    }
    this.subTotal = total;
    this.vat = this.subTotal / 10;
    this.grandTotal = this.subTotal + this.vat;
  }
  ////////////////////////////////////////////////////////////////////

  saveDetail(): void {

    // tslint:disable-next-line - Disables all

    this.dialog.open(AddedDialogComponent);
    this.invoiceService.addInvoice(this.invoice);
    this.router.navigate(['/apps/invoice']);

    
  }


}

