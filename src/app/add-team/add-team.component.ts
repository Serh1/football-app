import {MatButton} from '@angular/material/button';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Team} from '../models/team';

import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardTitle
} from '@angular/material/card';
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
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent {

  teamsService = inject(TeamsService);
  teams:Team[] =[];
  newTeam:Team = {
    draws: 0, gamesPlayed: 0, id: undefined, league: '', logo: '', losses: 0, name: '', points: 0, wins: 0
  };

  constructor() {
    this.teams = this.loadTeams()
  }


  loadTeams() {
    const teams = this.teamsService.getAllTeams();
    return teams.sort((t1, t2) => t2.points - t1.points);
  }



  onAddTeam(){
    this.teamsService.addNewTeam(this.newTeam)
    this.newTeam.gamesPlayed = this.newTeam.wins + this.newTeam.losses + this.newTeam.draws;
    this.newTeam.points = this.newTeam.draws +(this.newTeam.wins *3);
    //push team into backend
  }
}
