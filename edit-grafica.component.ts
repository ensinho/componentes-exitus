import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl, UntypedFormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


export interface Vegetable {
  name: string;
}


export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-edit-unidade',
  templateUrl: './editar-grafica.html',
  styleUrl: '../grafica.scss' 
  
})
export class AppEditGraficaComponent implements OnInit{

  afirmacoes: string[] = [''];

  selectedTab: string;
  labelPosition: 'Somente você' | 'Todos os usuários do exitus' = 'Todos os usuários do exitus';
  dificuldadePosition: 'Fácil' | 'Média' | 'Difícil';
  fontePosition: 'before' | 'after' = 'after';
  anexoPosition: 'before' | 'after' = 'after';
  afirmaPosition: 'before' | 'after' = 'after';
  referencPosition: 'sem' | 'com';

  addForm: UntypedFormGroup | any;
  rows: UntypedFormArray;
  
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  hide = true;
  hide2 = true;
  conhide = true;
  alignhide = true;
  option: string;

  @ViewChildren('afirmacaoElement') afirmacaoElements: QueryList<ElementRef>;



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

/*   removerAfirmacao() {
    this.afirmacoes.pop();
  } */

  logEvent(index: boolean): string {
    return index ? 'tab_ativa' : ' tab_inativa'
  }
 
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Admin Christus' }, { name: 'Pessoa 40' }, { name: 'Pessoa 106' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  
  ///////////////////////////////////////////////////////////
  subTotal = 0;
  vat = 0;
  grandTotal = 0;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {

    

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
    this.router.navigate(['/apps/invoice']);
  }


}
