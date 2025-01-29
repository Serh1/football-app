import {Component, input} from '@angular/core';
import {TeamCardComponent} from '../team-card/team-card.component';
import {Team} from '../models/team';

@Component({
  selector: 'app-teams',
  imports: [
    TeamCardComponent
  ],
  templateUrl: './teams.component.html',
  standalone: true,
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = input<Team[]>();

}
