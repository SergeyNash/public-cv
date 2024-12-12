export interface LocationSection {
  title: string;
  content: string;
}

export interface Location {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  sections: LocationSection[];
  techStack?: string[];
  achievements?: string[];
}

export interface Road {
  from: string;
  to: string;
  points: [number, number][];
}

export interface GameState {
  playerX: number;
  playerY: number;
  showingLocation: string | null;
  currentRoad: Road | null;
  hoveredLocation: string | null;
}