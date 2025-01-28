import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {StandingsComponent} from './standings/standings.component';
import {TeamsComponent} from './teams/teams.component';
import {GamesComponent} from './games/games.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, MatTabGroup, MatTab, StandingsComponent, TeamsComponent, GamesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-app';
}
