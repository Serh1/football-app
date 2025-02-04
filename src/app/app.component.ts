import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {StandingsComponent} from './standings/standings.component';
import {TeamsComponent} from './teams/teams.component';
import {GamesComponent} from './games/games.component';
import {TeamsService} from './services/teams.service';
import {Team} from './models/team';
import {DummyComponent} from './dummy/dummy.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabGroup, MatTab, StandingsComponent, TeamsComponent, GamesComponent, DummyComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // teamsService = inject(TeamsService);
  teams: Team[];

  constructor(private teamsService: TeamsService) {
    this.teams = this.loadTeams()
  }

  loadTeams() {
    const teams = this.teamsService.getAllTeams();
    return teams.sort((t1, t2) => t2.points - t1.points);
  }

}
