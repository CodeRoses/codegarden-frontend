import React, { useState, useEffect, useMemo } from "react";
import ExerciseTile from "./ExerciseTile";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

const ExerciseGrid: React.FunctionComponent = () => {
  const exercises = useMemo(
    () => [
      {
        id: 1,
        name: "Kociołek Sersi",
        difficulty: 1,
        completed: true,
      },
      {
        id: 2,
        name: "Tajemnicze badanie Zeldy",
        difficulty: 2,
        completed: false,
      },
      {
        id: 3,
        name: "Przygoda dziesięciu skarpetek",
        difficulty: 1,
        completed: false,
      },
      {
        id: 4,
        name: "Magiczny podwieczorek",
        difficulty: 3,
        completed: false,
      },
      {
        id: 5,
        name: "Komunikacyjny miszmasz",
        difficulty: 1,
        completed: false,
      },
      {
        id: 6,
        name: "Dziwny świat dorosłych",
        difficulty: 2,
        completed: true,
      },
      {
        id: 7,
        name: "Drzewo genealogiczne",
        difficulty: 3,
        completed: false,
      },
      {
        id: 8,
        name: "Brian Holt i jego lunch",
        difficulty: 2,
        completed: true,
      },
      {
        id: 9,
        name: "Urodziny Peppy",
        difficulty: 1,
        completed: false,
      },
      {
        id: 10,
        name: "Weekendowa podróż Franka",
        difficulty: 3,
        completed: false,
      },
    ],
    []
  );
  const [searchPhrase, setSearchPhrase] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  useEffect(() => {
    setFilteredExercises(
      exercises.filter(
        (exercise) =>
          exercise.name.includes(searchPhrase) &&
          (+difficulty === 0 || exercise.difficulty === +difficulty)
      )
    );
  }, [searchPhrase, difficulty, exercises]);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="bg-black bg-opacity-50 rounded-lg max-w-6xl">
        <div className="bg-gray-300 flex justify-end mb-10 w-full md:w-1/2 rounded-br-3xl">
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <FilterDropdown
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>
        <div className="grid grid-cols-1 py-5 px-6 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-32 self-center md:w-11/12 m-auto overflow-y-auto overflow-x-visible max-h-4/5">
          {filteredExercises.map((exercise) => (
            <ExerciseTile key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseGrid;
