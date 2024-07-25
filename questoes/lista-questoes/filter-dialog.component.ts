// filter-dialog.component.ts
import { Component ,Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
})
export class FilterDialogComponent {

  filterText: string = '';
  filterApplied: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  /* função para fechar o dialog */
  onNoClick(): void {
    this.dialogRef.close();
  }
  /* Função que pega o filtro e fecha */
  applyFilterAndClose(): void {
    this.filterApplied.emit(this.filterText);
    this.dialogRef.close();
  }

}
