import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { Team } from '../models/team';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-players-dialog',
  templateUrl: './players-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    NgForOf
  ],
  styleUrls: ['./players-dialog.component.css']
})
export class PlayersDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { team: Team }) {}
}
