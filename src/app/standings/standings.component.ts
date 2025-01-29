import {Component} from '@angular/core';
import {Team} from '../models/team';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-standings',
  imports: [
    MatTable,
    MatCellDef,
    MatHeaderCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatSort,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './standings.component.html',
  standalone: true,
  styleUrl: './standings.component.css'
})
export class StandingsComponent {

  teams: Team[] = [
    {
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
      name: 'Manchester United',
      league: 'Premier League',
      logo: 'assets/images/manutd.png',
      gamesPlayed: 10,
      wins: 7,
      draws: 2,
      losses: 2,
      points: 27
    },
    {
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

  displayedColumns: string[] = ['position', 'progress', 'name', 'wins', 'draws', 'losses', 'points'];

  constructor() {
    this.teams = this.teams.sort((t1, t2) => t2.points - t1.points);
  }

}
