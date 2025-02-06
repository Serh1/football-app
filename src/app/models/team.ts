export interface Team {
  id: number;
  name: string;
  country: string;
  logo: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  players: Player[];
  league: string;
}
export interface Player {
  id: number;
  name: string;
  position: string;
}

