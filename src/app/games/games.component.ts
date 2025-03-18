import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {input} from '@angular/core';
import {Game} from'../models/game';
import {GamesCardComponent} from '../games-card/games-card.component';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import {AddTeamComponent} from '../add-team/add-team.component';
import {TeamCardComponent} from '../team-card/team-card.component';

@Component({
  selector: 'app-games',
  imports: [
    TeamCardComponent,
    GamesCardComponent
  ],
  templateUrl: './games.component.html',
  standalone: true,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  teams: Team[] = Team;
}
