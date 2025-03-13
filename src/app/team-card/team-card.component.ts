import {Component, inject, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {Team} from '../models/team';
import {
  MatDialog
} from '@angular/material/dialog'
import {Player} from '../models/player';
import {PlayerDialogComponent} from '../player-dialog/player-dialog.component';


@Component({
  selector: 'app-team-card',
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatCard,
    MatButtonModule
  ],
  templateUrl: './team-card.component.html',
  standalone: true,
  styleUrl: './team-card.component.css'

})
export class TeamCardComponent {
  team = input<Team>()
  dialog = inject(MatDialog);


  onSeePlayers(team: string | undefined) {
    this.dialog.open(PlayerDialogComponent,{data: team});
  }
}

