import {Component, inject, input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {Game} from '../models/game';
import {TeamsService} from '../services/teams.service';

@Component({
  selector: 'app-games-card',
    imports: [
        MatCard

    ],
  templateUrl: './games-card.component.html',
  styleUrl: './games-card.component.css'
})
export class GamesCardComponent {

  teamsService = inject(TeamsService);
  games:Game[] =[];
  newGame: Game = {
    id: undefined, awayTeamGoals: 0, awayTeamId: 0, homeTeamGoals: 0, homeTeamId: 0, localDateTime: '', location: ''
  }

  constructor() {
    this.loadGames()
  }

  loadGames(){
    const teams = this.teamsService.getAllTeams()
  }
}
