import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {StandingsComponent} from './standings/standings.component';
import {TeamsComponent} from './teams/teams.component';
import {GamesComponent} from './games/games.component';
import {TeamsService} from './services/teams.service';
import {Team} from './models/team';
import {Player} from './models/player';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabGroup, MatTab, StandingsComponent, TeamsComponent, GamesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
  providers: [
    HttpClient
  ]
})
export class AppComponent {
  teamsService = inject(TeamsService);
  teams: Team[] = [];
  players: Player[];

  constructor() {
    this.loadTeams()
    this.players = this.loadPlayers()
  }

  loadTeams() {
    this.teamsService.getAllTeams().subscribe(teams => {
      console.log(teams)
      this.teams = teams.sort((t1, t2) => t2.points - t1.points);
    });
  }

  loadPlayers() {
    return this.teamsService.getAllPlayers();
  }
}
