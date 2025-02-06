import {Component, Input, input} from '@angular/core';
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
    MatRowDef,
  ],
  templateUrl: './standings.component.html',
  standalone: true,
  styleUrl: './standings.component.css'
})
export class StandingsComponent {
  displayedColumns: string[] = ['position', 'progress', 'name', 'wins', 'draws', 'losses', 'points'];

  @Input() teams: Team[] = [];
  getTeamsByLeague(league: string): Team[] {
    return this.teams.filter((team: Team) => team.league === league);
  }
}
