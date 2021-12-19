export interface IExerciseInstructions {
  title: string;
  flavor: string;
  task: string;
  instructions: string;
}

export interface IExerciseDetails {
  id: number;
  codePrewritten: string;
  codeFragments: string[];
  info: IExerciseInstructions;
}
