import {Injectable} from '@angular/core';
import {Team} from '../models/team';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {
  }

  getAllTeams(leagueId?: number): Observable<Team[]> {

    let params = new HttpParams()
    if (leagueId) {
      params = params.set('leagueId', leagueId!);
    }

    return this.http.get<Team[]>('http://localhost:8080/api/v1/teams', {params}).pipe(
      map((teams: any[]) => teams.map(team => ({
        id: team.id,
        name: team.teamName,
        country: team.country,
        logo: team.teamUrl,
        points: team.points,
        players: [], // Assuming players will be handled separately
        league: team.leagueId,
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0
      })))
    );
  }

//   TODO: Get a team from id

}
