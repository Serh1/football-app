import {Injectable} from '@angular/core';
import {Team} from '../models/team';
import {Player} from '../models/player';
//import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  allTeams:Team[] = [];
  //url = 'localhost:8080/api/v1/teams';

  constructor(/*private http:HttpClient*/) {
    this.allTeams = [
      {
        id: 1,
        name: 'FC Barcelona',
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
        name: 'FC Bayern Munich',
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

  saveTeam(team:Team){
    //this.http.post(this.url, team);
  }

  getAllTeams(): Team[] {
    return this.allTeams
  }

  addNewTeam(newTeam:Team){
    this.allTeams.push(newTeam)
    console.log(newTeam);
  }


//   TODO: Get a team from id
  getAllPlayers(): Player[] {
    return[
      {id: 1, firstName: 'Thibaut', lastName: 'Courtois', position: 'Goalkeeper', club: 'Real Madrid'},
      {id: 2, firstName: 'Manuel', lastName: 'Neuer', position: 'Goalkeeper', club: 'FC Bayern Munich'},
      {id: 3, firstName: 'Marc-André', lastName: 'ter Stegen', position: 'Goalkeeper', club: 'FC Barcelona'},
      {id: 4, firstName: 'Gianluigi', lastName: 'Donnarumma', position: 'Goalkeeper', club: 'PSG'},
      {id: 5, firstName: 'Alisson', lastName: 'Becker', position: 'Goalkeeper', club: 'Liverpool'},
      {id: 6, firstName: 'David', lastName: 'de Gea', position: 'Goalkeeper', club: 'Manchester United'},
      {id: 7, firstName: 'Karim', lastName: 'Benzema', position: 'Forward', club: 'Real Madrid'},
      {id: 8, firstName: 'Harry', lastName: 'Kane', position: 'Forward', club: 'FC Bayern Munich'},
      {id: 9, firstName: 'Robert', lastName: 'Lewandowski', position: 'Forward', club: 'FC Barcelona'},
      {id: 10, firstName: 'Kylian', lastName: 'Mbappé', position: 'Forward', club: 'PSG'},
      {id: 11, firstName: 'Mohamed', lastName: 'Salah', position: 'Forward', club: 'Liverpool'},
      {id: 12, firstName: 'Marcus', lastName: 'Rashford', position: 'Forward', club: 'Manchester United'},
      {id: 13, firstName: 'Luka', lastName: 'Modric', position: 'Midfielder', club: 'Real Madrid'},
      {id: 14, firstName: 'Joshua', lastName: 'Kimmich', position: 'Midfielder', club: 'FC Bayern Munich'},
      {id: 15, firstName: 'Pedri', lastName: 'González', position: 'Midfielder', club: 'FC Barcelona'},
      {id: 16, firstName: 'Marco', lastName: 'Verratti', position: 'Midfielder', club: 'PSG'},
      {id: 17, firstName: 'Jordan', lastName: 'Henderson', position: 'Midfielder', club: 'Liverpool'},
      {id: 18, firstName: 'Bruno', lastName: 'Fernandes', position: 'Midfielder', club: 'Manchester United'},
      {id: 19, firstName: 'Éder', lastName: 'Militão', position: 'Defender', club: 'Real Madrid'},
      {id: 20, firstName: 'Dayot', lastName: 'Upamecano', position: 'Defender', club: 'FC Bayern Munich'},
      {id: 21, firstName: 'Ronald', lastName: 'Araújo', position: 'Defender', club: 'FC Barcelona'},
      {id: 22, firstName: 'Marquinhos', lastName: 'Corrêa', position: 'Defender', club: 'PSG'},
      {id: 23, firstName: 'Virgil', lastName: 'van Dijk', position: 'Defender', club: 'Liverpool'},
      {id: 24, firstName: 'Raphaël', lastName: 'Varane', position: 'Defender', club: 'Manchester United'}
    ]
  }
}


