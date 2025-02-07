import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Team } from '../models/team';
import { PlayersDialogComponent } from '../players-dialog/players-dialog.component';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  standalone: true,
  styleUrls: ['./team-card.component.css'],  // beachte "styleUrls" statt "styleUrl"
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatButton
  ]
})
export class TeamCardComponent {
  @Input() team!: Team; // Korrekte Deklaration des Inputs

  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(PlayersDialogComponent, {
      data: { team: this.team }, // Übergabe des Team-Objekts unter dem Schlüssel "team"
      width: '330px',
      height: '300px',
    });
  }
}
