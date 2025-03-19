import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {Player} from '../models/player';
import {TeamsService} from '../services/teams.service';

@Component({
  selector: 'app-player-dialog',
  imports: [
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './player-dialog.component.html',
  standalone: true,
  styleUrl: './player-dialog.component.css'
})
export class PlayerDialogComponent implements OnInit {

  ngOnInit(): void {
    this.loadPlayers()
  }

  data = inject(MAT_DIALOG_DATA);
  teamsService = inject(TeamsService)
  players: Player[] = []

  loadPlayers() {
    this.players = this.teamsService.getAllPlayers();
  }
}
