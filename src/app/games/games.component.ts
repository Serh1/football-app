import { Component, OnInit, inject } from '@angular/core';
import { GamesService } from '../services/games.service';
import { TeamsService } from '../services/teams.service';
import { MatExpansionModule } from '@angular/material/expansion';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  standalone: true,
  imports: [MatExpansionModule, NgForOf]
})
export class GamesComponent implements OnInit {
  dataSource: any[] = [];

  private gamesService = inject(GamesService);
  private teamsService = inject(TeamsService);

  ngOnInit(): void {
    const games = this.gamesService.getAllGames();
    const teams = this.teamsService.getAllTeams(1);

    // this.dataSource = games.map(game => {
    //   const team1 = teams.find(team => team.id === game.team1_id);
    //   const team2 = teams.find(team => team.id === game.team2_id);
    //   return {
    //     game_id: game.game_id,
    //     team1: {
    //       name: team1 ? team1.name : 'Unknown',
    //       logo: team1 ? team1.logo : ''
    //     },
    //     team2: {
    //       name: team2 ? team2.name : 'Unknown',
    //       logo: team2 ? team2.logo : ''
    //     },
    //     score_team1: game.score_team1,
    //     score_team2: game.score_team2
    //   };
    // });
  }
}
