import {Component, input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Team} from '../models/team';

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
  team = input<Team>()
}
