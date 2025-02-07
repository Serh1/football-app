import {Component, input} from '@angular/core';
import {TeamCardComponent} from '../team-card/team-card.component';
import {AddTeamComponent} from '../add-team/add-team.component';
import {Team} from '../models/team';

@Component({
  selector: 'app-teams',
  imports: [TeamCardComponent, AddTeamComponent],
  templateUrl: './teams.component.html',
  standalone: true,
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = input.required<Team[]>();

  addNewTeam(newTeam: Team) {
    newTeam.id = Math.max(...this.teams().map(t => t.id)) + 1;
    this.teams().push(newTeam);
  }
}
