import { Component, input } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { AddTeamComponent } from '../add-team/add-team.component';
import { Team } from '../models/team';

@Component({
  selector: 'app-teams',
  imports: [TeamCardComponent, AddTeamComponent],
  templateUrl: './teams.component.html',
  standalone: true,
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams = input<Team[]>();

  addNewTeam(newTeam: Team) {
    // @ts-ignore
    const newId = Math.max(...this.teams().map(t => t.id)) + 1;
    newTeam.id = newId;
    // @ts-ignore
    this.teams().push(newTeam);
  }
}
