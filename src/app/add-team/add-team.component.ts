import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Team } from '../models/team';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-add-team',
  standalone: true,
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css',
  imports: [CommonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatSelect, MatOption]
})
export class AddTeamComponent {
  @Output() teamAdded = new EventEmitter<Team>();

  newTeam: Partial<Team> = {
    name: '',
    country: '',
    logo: 'assets/images/bayern.png' // Standard-Logo für neue Teams
  };

  addTeam() {
    if (this.newTeam.name && this.newTeam.country) {
      this.teamAdded.emit({
        id: 0, // Wird später in TeamsComponent gesetzt
        name: this.newTeam.name,
        country: this.newTeam.country,
        logo: this.newTeam.logo!,
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        players: [],
        league: '' // Keine Liga
      });

      // Felder zurücksetzen
      this.newTeam = { name: '', country: '', logo: 'assets/images/bayern.png' };
    }
  }
}
