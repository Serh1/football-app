import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-app';
}
