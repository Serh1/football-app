import {Component, input} from '@angular/core';
import {Game} from '../models/game';
import {GamesCardComponent} from '../games-card/games-card.component';
import {TeamCardComponent} from '../team-card/team-card.component';

@Component({
  selector: 'app-games',
  imports: [
    GamesCardComponent
  ],
  templateUrl: './games.component.html',
  standalone: true,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  game = input<Game>()

}
