import {Injectable} from '@angular/core';
import {Team} from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() {
  }

  getAllTeams(): Team[] {
    return [
      {
        id: 1,
        name: 'FC Barcelona',
        country: 'Spain',
        logo: 'assets/images/barcelona.png',
        gamesPlayed: 10,
        wins: 7,
        draws: 2,
        losses: 1,
        points: 23
      },
      {
        id: 2,
        name: 'Manchester United',
        country: 'England',
        logo: 'assets/images/manutd.png',
        gamesPlayed: 10,
        wins: 7,
        draws: 2,
        losses: 2,
        points: 27
      },
      {
        id: 3,
        name: 'Real Madrid',
        country: 'Spain',
        logo: 'assets/images/realmadrid.png',
        gamesPlayed: 10,
        wins: 8,
        draws: 1,
        losses: 1,
        points: 25
      },
      {
        id: 4,
        name: 'Liverpool',
        country: 'England',
        logo: 'assets/images/liverpool.png',
        gamesPlayed: 10,
        wins: 5,
        draws: 3,
        losses: 2,
        points: 18
      },
      {
        id: 5,
        name: 'PSG',
        country: 'France',
        logo: 'assets/images/psg.png',
        gamesPlayed: 10,
        wins: 7,
        draws: 2,
        losses: 1,
        points: 23
      },
      {
        id: 6,
        name: 'Bayern Munich',
        country: 'Germany',
        logo: 'assets/images/bayern.png',
        gamesPlayed: 10,
        wins: 8,
        draws: 1,
        losses: 1,
        points: 25
      }
    ];
  }

//   TODO: Get a team from id

}
