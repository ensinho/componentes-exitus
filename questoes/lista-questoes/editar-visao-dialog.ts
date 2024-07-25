import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-views-dialog',
  templateUrl: './editar-visao-dialog.html',
  styleUrls: ['./tela-questoes.scss'],
})
export class EditViewsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditViewsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { views: string[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeView(index: number): void {
    const viewName = this.data.views[index];
    localStorage.removeItem(viewName);
    this.data.views.splice(index, 1);
  }
}
