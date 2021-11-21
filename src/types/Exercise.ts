export interface Exercise {
  id: number;
  name: string;
  difficulty: Difficulty;
  completed: boolean;
}

export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}
