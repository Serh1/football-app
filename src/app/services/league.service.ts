import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {League} from '../models/league';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) {
  }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>('http://localhost:8080/leagues');
  }

}
