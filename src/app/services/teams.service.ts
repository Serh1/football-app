import {Injectable} from '@angular/core';
import {Team} from '../models/team';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {
  }

  getAllTeams(leagueId?: number): Observable<Team[]> {
    const params = new HttpParams()
    if (!leagueId) {
      params.append('leagueId', leagueId!);
    }
    return this.http.get<Team[]>('http://localhost:8080/api/v1/teams', {params});
  }

//   TODO: Get a team from id

}
