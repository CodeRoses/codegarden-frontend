import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IExerciseInstructions } from "../types/ExerciseDetails";

interface IProps {
  exerciseInstruction: IExerciseInstructions;
}

const Instructions: React.FunctionComponent<IProps> = ({
  exerciseInstruction,
}) => {
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
        {exerciseInstruction.title}
      </div>
      <div className="flex flex-col bg-black bg-opacity-50 py-7 px-5 text-right">
        <div className="text-white mb-7">{exerciseInstruction.flavor}</div>
        <div className="text-red-400 mb-7">{exerciseInstruction.task}</div>
        <div className="text-green-300">{exerciseInstruction.instructions}</div>
      </div>
    </div>
  );
};

export default Instructions;
