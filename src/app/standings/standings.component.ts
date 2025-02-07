import {Component} from '@angular/core';
import {Team} from '../models/team';
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
import {MatSort} from '@angular/material/sort';
import {TeamsService} from '../services/teams.service';

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

  displayedColumns: string[] = ['position', 'progress', 'name', 'wins', 'draws', 'losses', 'points'];

  // @Input() teams: Team[] = [];

  constructor(private ts: TeamsService) {
  }

  getTeamsByLeague(league: number): Team[] {
    let teamsTemp: Team[] = [];
    this.ts.getAllTeams(league).subscribe(teams => {
        teamsTemp = teams;
      }
    )
    return teamsTemp;
  }
}
