import React from "react";

interface SearchProps {
  searchPhrase: string;
  setSearchPhrase: (_: string) => void;
}

const SearchBar: React.FunctionComponent<SearchProps> = ({
  searchPhrase,
  setSearchPhrase,
}) => {
  return (
    <input
      className="w-3/5 m-3 rounded-lg p-2"
      type="text"
      onChange={(e) => setSearchPhrase(e.currentTarget.value)}
      placeholder="Wyszukaj ćwiczenie..."
      value={searchPhrase}
    />
  );
};

export default SearchBar;
