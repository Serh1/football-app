import {Injectable} from '@angular/core';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() {
  }

  getAllGames(): Game[] {
    return [
      {
        game_id: 1,
        team1_id: 1,
        team2_id: 2,
        score_team1: 2,
        score_team2: 1,
      },
      {
        game_id: 2,
        team1_id: 2,
        team2_id: 1,
        score_team1: 3,
        score_team2: 2,
      },
      {
        game_id: 3,
        team1_id: 4,
        team2_id: 3,
        score_team1: 1,
        score_team2: 1,
      },
      {
        game_id: 4,
        team1_id: 1,
        team2_id: 5,
        score_team1: 2,
        score_team2: 2,
      },
      {
        game_id: 5,
        team1_id: 2,
        team2_id: 3,
        score_team1: 3,
        score_team2: 2,
      },
      {
        game_id: 6,
        team1_id: 5,
        team2_id: 3,
        score_team1: 1,
        score_team2: 1,
      },
      {
        game_id: 7,
        team1_id: 1,
        team2_id: 6,
        score_team1: 2,
        score_team2: 1,
      },
      {
        game_id: 8,
        team1_id: 4,
        team2_id: 6,
        score_team1: 3,
        score_team2: 2,
      },
      {
        game_id: 9,
        team1_id: 2,
        team2_id: 4,
        score_team1: 1,
        score_team2: 1,
      },
      {
        game_id: 10,
        team1_id: 6,
        team2_id: 3,
        score_team1: 2,
        score_team2: 2,
      },

    ];
    }
}
