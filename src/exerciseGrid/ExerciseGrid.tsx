import React from "react";
import ExerciseTile from "./ExerciseTile";

const ExerciseGrid: React.FunctionComponent = () => {
  const exercises = [
    {
      id: 1,
      name: "Kociołek Sersi",
      difficulty: 1,
      completed: true,
    },
    {
      id: 2,
      name: "Kwiaty Zeldy",
      difficulty: 2,
      completed: false,
    },
    {
      id: 3,
      name: "Piosenki Twice",
      difficulty: 1,
      completed: false,
    },
    {
      id: 4,
      name: "Kurczak Chaeyoung",
      difficulty: 3,
      completed: false,
    },
    {
      id: 5,
      name: "Opony Hamiltona",
      difficulty: 1,
      completed: true,
    },
    {
      id: 6,
      name: "Chaos w MPK",
      difficulty: 1,
      completed: false,
    },
    {
      id: 7,
      name: "Porażki Najmana",
      difficulty: 1,
      completed: false,
    },
    {
      id: 8,
      name: "Skrzydła Ikara",
      difficulty: 1,
      completed: false,
    },
    {
      id: 8,
      name: "Drzewo genealogiczne",
      difficulty: 3,
      completed: false,
    },
    {
      id: 8,
      name: "Brian Holt i jego taco",
      difficulty: 2,
      completed: true,
    },
    {
      id: 8,
      name: "Kontakty Peppy",
      difficulty: 1,
      completed: false,
    },
  ];
  return (
    <div className="h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-32 bg-black p-10 bg-opacity-50 rounded-lg self-center w-11/12 md:w-7/12 m-auto overflow-y-auto max-h-4/5">
        {exercises.map((exercise) => (
          <ExerciseTile key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseGrid;
