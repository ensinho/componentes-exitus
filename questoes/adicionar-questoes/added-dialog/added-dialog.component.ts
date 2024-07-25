import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-added-dialog',
  templateUrl: './added-dialog.component.html'
})
export class AddedDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}
}
