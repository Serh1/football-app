import {Component, input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {Game} from '../models/game';

@Component({
  selector: 'app-games-card',
    imports: [
        MatCard

    ],
  templateUrl: './games-card.component.html',
  styleUrl: './games-card.component.css'
})
export class GamesCardComponent {
  game = input<Game[]>();
}
