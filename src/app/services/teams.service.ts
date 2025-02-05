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
        points: 23,
        players: [
          {
            id: 1,
            name: 'Lionel Messi',
            position: 'Forward',
          },
          {
            id: 2,
            name: 'Gerard Pique',
            position: 'Defender',
          },
          {
            id: 3,
            name: 'Sergio Busquets',
            position: 'Midfielder',
          },
          {
            id: 4,
            name: 'Ansu Fati',
            position: 'Forward',
          },
          {
            id: 5,
            name: 'Pedri',
            position: 'Midfielder',
          },
        ],
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
        points: 27,
        players: [
          {
            id: 1,
            name: 'Bruno Fernandes',
            position: 'Midfielder',
          },
          {
            id: 2,
            name: 'Marcus Rashford',
            position: 'Forward',
          },
          {
            id: 3,
            name: 'Harry Maguire',
            position: 'Defender',
          },
          {
            id: 4,
            name: 'David De Gea',
            position: 'Goalkeeper',
          },
          {
            id: 5,
            name: 'Paul Pogba',
            position: 'Midfielder',
          },
        ],
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
        points: 25,
        players: [
          {
            id: 1,
            name: 'Karim Benzema',
            position: 'Forward',
          },
          {
            id: 2,
            name: 'Thibaut Courtois',
            position: 'Goalkeeper',
          },
          {
            id: 3,
            name: 'Sergio Ramos',
            position: 'Defender',
          },
          {
            id: 4,
            name: 'Casemiro',
            position: 'Midfielder',
          },
          {
            id: 5,
            name: 'Luka Modric',
            position: 'Midfielder',
          },
      ]
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
        points: 18,
        players: [
          {
            id: 1,
            name: 'Mohamed Salah',
            position: 'Forward',
          },
          {
            id: 2,
            name: 'Virgil van Dijk',
            position: 'Defender',
          },
          {
            id: 3,
            name: 'Sadio Mane',
            position: 'Forward',
          },
          {
            id: 4,
            name: 'Alisson Becker',
            position: 'Goalkeeper',
          },
          {
            id: 5,
            name: 'Fabinho',
            position: 'Midfielder',
          },
      ]
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
        points: 23,
        players: [
          {
            id: 1,
            name: 'Kylian Mbappe',
            position: 'Forward',
          },
          {
            id: 2,
            name: 'Neymar',
            position: 'Forward',
          },
          {
            id: 3,
            name: 'Keylor Navas',
            position: 'Goalkeeper',
          },
          {
            id: 4,
            name: 'Marquinhos',
            position: 'Defender',
          },
          {
            id: 5,
            name: 'Marco Verratti',
            position: 'Midfielder',
          },
      ]
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
        points: 25,
        players: [
          {
            id: 1,
            name: 'Robert Lewandowski',
            position: 'Forward',
          },
          {
            id: 2,
            name: 'Manuel Neuer',
            position: 'Goalkeeper',
          },
          {
            id: 3,
            name: 'Joshua Kimmich',
            position: 'Midfielder',
          },
          {
            id: 4,
            name: 'David Alaba',
            position: 'Defender',
          },
          {
            id: 5,
            name: 'Thomas Muller',
            position: 'Forward',
          },
      ]
      }
    ];
  }

//   TODO: Get a team from id

}
