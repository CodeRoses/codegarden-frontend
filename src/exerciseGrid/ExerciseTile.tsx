import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IExercise } from "../types/Exercise";

interface ExerciseProps {
  exercise: IExercise;
}

const ExerciseTile: React.FunctionComponent<ExerciseProps> = ({ exercise }) => {
  const DIFFICULTIES = {
    EASY: {
      name: "Łatwy",
      color: "easy",
    },
    MEDIUM: {
      name: "Zaawansowany",
      color: "medium",
    },
    HARD: {
      name: "Trudny",
      color: "hard",
    },
  };
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <div className="bg-sizzling-red bg-opacity-75 p-10 pb-0 rounded-4xl self-center h-52 relative flex flex-col">
        <div className="bg-light-cyan border-2 text-2xl border-levis-lush-grey border-opacity-70 h-2/3 flex items-center justify-center">
          <p className="text-center">{exercise.title}</p>
        </div>
        {exercise.completed ? (
          <FaCheck
            color="white"
            size="50"
            className="bg-green-700 rounded-full p-2 absolute -top-4 -right-4"
          />
        ) : null}
        <div
          className={`bg-diff-${
            DIFFICULTIES[exercise.difficulty].color
          } bg-no-repeat bg-contain mt-auto h-10 flex items-center justify-center`}
        >
          {DIFFICULTIES[exercise.difficulty].name}
        </div>
      </div>
    </Link>
  );
};

export default ExerciseTile;
