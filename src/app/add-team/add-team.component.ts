import {MatButton} from '@angular/material/button';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Team} from '../models/team';

import {MatCard, MatCardActions, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {TeamsService} from '../services/teams.service';

@Component({
  selector: 'app-add-team',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-team.component.html',
  standalone: true,
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {

  teamsService = inject(TeamsService);
  teams: Team[] = [];
  newTeam: Team = {
    id: 0, name: '', league: '', logo: './assets/images/barcelona.png', gamesPlayed: 0, wins: 0, losses: 0, draws: 0, points: 0
  };

  constructor() {
    this.teams = this.loadTeams()
  }

  loadTeams(): Team[] {
    return this.teamsService.getAllTeams();
  }

  onAddTeam() {
    this.teamsService.addNewTeam({
      id: this.teams.length + 1,
      name: this.newTeam.name,
      league: this.newTeam.league,
      logo: this.newTeam.logo,
      gamesPlayed: this.newTeam.gamesPlayed,
      wins: this.newTeam.wins,
      draws: this.newTeam.draws,
      losses: this.newTeam.losses,
      points: this.newTeam.points
    });
  };

}
