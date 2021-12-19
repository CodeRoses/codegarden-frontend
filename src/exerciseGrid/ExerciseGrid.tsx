import React, { useState, useEffect } from "react";
import ExerciseTile from "./ExerciseTile";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import axios, { AxiosResponse } from "axios";
import { DifficultyFilter, IExercise } from "../types/Exercise";
import hmmm from "../Hmmm.svg";

const ExerciseGrid: React.FunctionComponent = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [difficulty, setDifficulty] = useState(DifficultyFilter.All);
  const [loading, setLoading] = useState(false);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  useEffect(() => {
    console.log(DifficultyFilter.All);
    console.log(difficulty);
    setFilteredExercises(
      exercises.filter(
        (exercise) =>
          exercise.title.toLowerCase().includes(searchPhrase) &&
          (difficulty === DifficultyFilter.All ||
            exercise.difficulty === difficulty)
      )
    );
  }, [searchPhrase, difficulty, exercises]);
  const getExercises = async () => {
    setLoading(true);
    const response: AxiosResponse<IExercise[]> = await axios.get(
      "https://codegarden-api.azurewebsites.net/exercise"
    );
    setExercises(response.data);
    setLoading(false);
  };

  React.useEffect(() => {
    getExercises();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="bg-black bg-opacity-50 rounded-lg min-w-6xl max-w-6xl">
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
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-4/5 max-h-4/5">
            <h1 className="text-4xl text-pink-600 font-bold">
              Clyde szuka zadań...
            </h1>
            <img src={hmmm} className="w-2/5" alt="ok-logo" />
          </div>
        ) : (
          <div className="grid grid-cols-1 py-5 px-6 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-32 self-center md:w-11/12 m-auto overflow-y-auto overflow-x-visible min-h-4/5 max-h-4/5">
            {filteredExercises.map((exercise) => (
              <ExerciseTile key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseGrid;
