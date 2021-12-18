import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const text = {
  title: "Pokój Ani",
  flavor:
    "W pokoju Ani zrobił się straszny bałagan! Trzeba w takim razie trochę posprzątać. Na podłodze rozrzucone są ubrania, zabawki i książki. Należy schować ubrania i zabawki, a następnie ułożyć książki na półce w odpowiednich przegródkach.",
  task: "Pomóż Ani odłożyć wszystkie zabawki do pudła i ubrania do szafy. Ania odkłada swoje ksiażki na półkę, porządkując je w przegródkach według kategorii.",
  instructions:
    "Przeciągnij i ułóż bloki kodu, aby rozłożyć zabawki i ubrania w odpowiednie miejsca, a następnie przyporządkować książki do odpowiednik przegródek na półce.",
};

const Instructions: React.FunctionComponent = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => setHidden(!hidden);
  return (
    <div
      className={`rounded-l-3xl bg-green-300 w-80 p-10 absolute right-0 ${
        !hidden ? "" : "transform translate-x-72"
      } transition-transform`}
    >
      <button
        type="button"
        className="absolute top-2/4 left-1 text-xl"
        onClick={toggleHidden}
      >
        {hidden ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
      </button>
      <div className="text-white text-lg bg-red-400 mb-5 py-5 text-center">
        {text.title}
      </div>
      <div className="flex flex-col bg-black bg-opacity-50 py-7 px-5 text-right">
        <div className="text-white mb-7">{text.flavor}</div>
        <div className="text-red-400 mb-7">{text.task}</div>
        <div className="text-green-300">{text.instructions}</div>
      </div>
    </div>
  );
};

export default Instructions;
