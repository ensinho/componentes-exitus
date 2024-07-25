import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-save-view-dialog',
  templateUrl: './salvar-visao-dialog.html',
  styleUrls: ['./tela-questoes.scss'],
})
export class SaveViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SaveViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { viewName: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
