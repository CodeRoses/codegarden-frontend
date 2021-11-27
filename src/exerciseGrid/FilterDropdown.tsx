import React from "react";

interface FilterProps {
  difficulty: string;
  setDifficulty: (_: string) => void;
}

const FilterDropdown: React.FunctionComponent<FilterProps> = ({
  difficulty,
  setDifficulty,
}) => {
  return (
    <select
      className="m-3 rounded-lg p-2 mr-6"
      value={difficulty}
      onChange={(e) => setDifficulty(e.currentTarget.value)}
    >
      <option value="0">Wszystkie</option>
      <option value="1">Łatwy</option>
      <option value="2">Zaawansowany</option>
      <option value="3">Trudny</option>
    </select>
  );
};

export default FilterDropdown;
