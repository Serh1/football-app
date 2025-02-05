import { Component, OnInit, inject } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../models/game';
import { TeamsService } from '../services/teams.service';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  standalone: true,
  imports: [
    MatColumnDef,
    MatTable,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef
  ]
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = ['game_id', 'team1', 'team2', 'score_team1', 'score_team2'];
  dataSource: any[] = [];

  private gamesService = inject(GamesService);
  private teamsService = inject(TeamsService);

  ngOnInit(): void {
    const games = this.gamesService.getAllGames();
    const teams = this.teamsService.getAllTeams();

    this.dataSource = games.map(game => {
      const team1 = teams.find(team => team.id === game.team1_id);
      const team2 = teams.find(team => team.id === game.team2_id);
      return {
        game_id: game.game_id,
        team1: {
          name: team1 ? team1.name : 'Unknown',
          logo: team1 ? team1.logo : ''
        },
        team2: {
          name: team2 ? team2.name : 'Unknown',
          logo: team2 ? team2.logo : ''
        },
        score_team1: game.score_team1,
        score_team2: game.score_team2
      };
    });
  }
}
