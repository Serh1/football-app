import {Component, inject, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {Team} from '../models/team';
import {PlayersDialogComponent} from '../players-dialog/players-dialog.component';

@Component({
  selector: 'app-team-card',
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatCard
  ],
  templateUrl: './team-card.component.html',
  standalone: true,
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  team = input<Team>();
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(PlayersDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
