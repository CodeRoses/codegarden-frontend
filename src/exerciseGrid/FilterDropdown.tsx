import React from "react";
import { DifficultyFilter } from "../types/Exercise";

interface FilterProps {
  difficulty: string;
  setDifficulty: (_: DifficultyFilter) => void;
}

const FilterDropdown: React.FunctionComponent<FilterProps> = ({
  difficulty,
  setDifficulty,
}) => {
  return (
    <select
      className="m-3 rounded-lg p-2 mr-6"
      value={difficulty}
      onChange={(e) => setDifficulty(e.currentTarget.value as DifficultyFilter)}
    >
      <option value={DifficultyFilter.All}>Wszystkie</option>
      <option value={DifficultyFilter.Easy}>Łatwy</option>
      <option value={DifficultyFilter.Medium}>Zaawansowany</option>
      <option value={DifficultyFilter.Hard}>Trudny</option>
    </select>
  );
};

export default FilterDropdown;
