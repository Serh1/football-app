import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-players-dialog',
  imports: [
    MatDialogContent
  ],
  templateUrl: './players-dialog.component.html',
  styleUrl: './players-dialog.component.css'
})
export class PlayersDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
