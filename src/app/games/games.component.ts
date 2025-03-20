import {Component, inject, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {GamesCardComponent} from '../games-card/games-card.component';
import {TeamsService} from '../services/teams.service';

@Component({
  selector: 'app-games',
  imports: [
    GamesCardComponent
  ],
  templateUrl: './games.component.html',
  standalone: true,
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {

  teamsService = inject(TeamsService)
  games: Game[] = [] as Game[];
  gameDetails: Array<object> = [];

  ngOnInit(): void {
    this.loadAllGames();
    let teamHome = null;
    let teamAway = null;
    for (const game of this.games) {
      teamHome = this.loadTeamById(game.homeTeamId)
      teamAway = this.loadTeamById(game.awayTeamId)
      this.gameDetails.push(
        {
          teamHome: teamHome,
          teamAway: teamAway,
          homeTeamGoals: game.homeTeamGoals,
          awayTeamGoals: game.awayTeamGoals
        }
      )
    }

  }

  loadAllGames() {
    this.games = this.teamsService.getAllGames();
  }

  loadTeamById(id: number | undefined) {
    return this.teamsService.getTeamById(id);
  }

}

