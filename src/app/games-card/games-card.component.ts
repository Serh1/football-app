import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-games-card',
  imports: [
    MatCard
  ],
  templateUrl: './games-card.component.html',
  standalone: true,
  styleUrl: './games-card.component.css'
})
export class GamesCardComponent {
  @Input() gameDetail: any

}
