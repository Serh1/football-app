import {inject, Injectable} from '@angular/core';
import {Team} from '../models/team';
import {Player} from '../models/player';
import {Game} from '../models/game';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  allTeams: Team[] = [];

  constructor(private http: HttpClient) {
    this.allTeams = [
      {
        id: 1,
        name: 'Barcelona',
        league: 'La Liga',
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
        league: 'Premier League',
        logo: 'assets/images/manutd.png',
        gamesPlayed: 10,
        wins: 7,
        draws: 2,
        losses: 0,
        points: 27
      },
      {
        id: 3,
        name: 'Real Madrid',
        league: 'La Liga',
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
        league: 'Premier League',
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
        league: 'Ligue 1',
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
        league: 'Bundesliga',
        logo: 'assets/images/bayern.png',
        gamesPlayed: 10,
        wins: 8,
        draws: 1,
        losses: 1,
        points: 25
      }
    ];
  }

  saveTeam(team: Team) {
    //this.http.post(this.url, team);
  }

  getTeamById(id: number | undefined){
    return this.allTeams.find(team => team.id === id)
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('http://localhost:8080/api/v1/teams')
  }

  addNewTeam(newTeam: Team) {
    this.allTeams.push(newTeam)
    console.log(this.allTeams);
  }

  getAllPlayers(): Player[] {
    return [
      {id: 1, firstName: 'Thibaut', lastName: 'Courtois', position: 'Goalkeeper', club: 'Real Madrid'},
      {id: 2, firstName: 'Manuel', lastName: 'Neuer', position: 'Goalkeeper', club: 'Bayern Munich'},
      {id: 3, firstName: 'Marc-André', lastName: 'ter Stegen', position: 'Goalkeeper', club: 'Barcelona'},
      {id: 4, firstName: 'Gianluigi', lastName: 'Donnarumma', position: 'Goalkeeper', club: 'PSG'},
      {id: 5, firstName: 'Alisson', lastName: 'Becker', position: 'Goalkeeper', club: 'Liverpool'},
      {id: 6, firstName: 'David', lastName: 'de Gea', position: 'Goalkeeper', club: 'Manchester United'},
      {id: 7, firstName: 'Karim', lastName: 'Benzema', position: 'Forward', club: 'Real Madrid'},
      {id: 8, firstName: 'Harry', lastName: 'Kane', position: 'Forward', club: 'Bayern Munich'},
      {id: 9, firstName: 'Robert', lastName: 'Lewandowski', position: 'Forward', club: 'Barcelona'},
      {id: 10, firstName: 'Kylian', lastName: 'Mbappé', position: 'Forward', club: 'PSG'},
      {id: 11, firstName: 'Mohamed', lastName: 'Salah', position: 'Forward', club: 'Liverpool'},
      {id: 12, firstName: 'Marcus', lastName: 'Rashford', position: 'Forward', club: 'Manchester United'},
      {id: 13, firstName: 'Luka', lastName: 'Modric', position: 'Midfielder', club: 'Real Madrid'},
      {id: 14, firstName: 'Joshua', lastName: 'Kimmich', position: 'Midfielder', club: 'Bayern Munich'},
      {id: 15, firstName: 'Pedri', lastName: 'González', position: 'Midfielder', club: 'Barcelona'},
      {id: 16, firstName: 'Marco', lastName: 'Verratti', position: 'Midfielder', club: 'PSG'},
      {id: 17, firstName: 'Jordan', lastName: 'Henderson', position: 'Midfielder', club: 'Liverpool'},
      {id: 18, firstName: 'Bruno', lastName: 'Fernandes', position: 'Midfielder', club: 'Manchester United'},
      {id: 19, firstName: 'Éder', lastName: 'Militão', position: 'Defender', club: 'Real Madrid'},
      {id: 20, firstName: 'Dayot', lastName: 'Upamecano', position: 'Defender', club: 'Bayern Munich'},
      {id: 21, firstName: 'Ronald', lastName: 'Araújo', position: 'Defender', club: 'Barcelona'},
      {id: 22, firstName: 'Marquinhos', lastName: 'Corrêa', position: 'Defender', club: 'PSG'},
      {id: 23, firstName: 'Virgil', lastName: 'van Dijk', position: 'Defender', club: 'Liverpool'},
      {id: 24, firstName: 'Raphaël', lastName: 'Varane', position: 'Defender', club: 'Manchester United'}
    ]
  }

  getAllGames(): Game[] {
    return [
      {
        id: 1,
        localDateTime: '2025-03-18T15:00:00',
        location: 'Berlin',
        homeTeamId: 1,
        awayTeamId: 2,
        homeTeamGoals: 3,
        awayTeamGoals: 2
      },
      {
        id: 2,
        localDateTime: '2025-03-19T18:00:00',
        location: 'Hamburg',
        homeTeamId: 3,
        awayTeamId: 4,
        homeTeamGoals: 1,
        awayTeamGoals: 1
      },
      {
        id: 3,
        localDateTime: '2025-03-20T20:00:00',
        location: 'Munich',
        homeTeamId: 5,
        awayTeamId: 6,
        homeTeamGoals: 2,
        awayTeamGoals: 3
      },
      {
        id: 4,
        localDateTime: '2025-03-21T17:00:00',
        location: 'Cologne',
        homeTeamId: 2,
        awayTeamId: 3,
        homeTeamGoals: 0,
        awayTeamGoals: 2
      },
      {
        id: 5,
        localDateTime: '2025-03-22T19:00:00',
        location: 'Frankfurt',
        homeTeamId: 4,
        awayTeamId: 5,
        homeTeamGoals: 4,
        awayTeamGoals: 1
      }
    ]
  }
}


