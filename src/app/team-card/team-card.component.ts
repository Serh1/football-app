import {Component, inject, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Team} from '../models/team';
import {MatDialog} from '@angular/material/dialog';
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
  @Input() team!: Team; // Korrekte Deklaration des Inputs

  dialog = inject(MatDialog);

  openDialog() {
    console.log(this.team);
    this.dialog.open(PlayersDialogComponent,
      {
        data: {team: this.team}, // Übergabe des Team-Objekts unter dem Schlüssel "team"
        width: '330px',
        height: '300px',
      });
  }
}
