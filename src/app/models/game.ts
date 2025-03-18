export interface Game{
  id?: number;
  localDateTime: string;
  location: string;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

