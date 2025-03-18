import {Component, input} from '@angular/core';
import {TeamCardComponent} from '../team-card/team-card.component';
import {Team} from '../models/team';
import {AddTeamComponent} from '../add-team/add-team.component';

@Component({
  selector: 'app-teams',
  imports: [
    TeamCardComponent,
    AddTeamComponent
  ],
  templateUrl: './teams.component.html',
  standalone: true,
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = input<Team[]>();

}
