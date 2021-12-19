export interface IExercise {
  id: number;
  title: string;
  difficulty: Difficulty;
  completed: boolean;
}

export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export enum DifficultyFilter {
  All = "ALL",
  Easy = "EASY",
  Medium = "MEDIUM",
  Hard = "HARD",
}
