import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IExerciseDetails } from "../types/ExerciseDetails";
import CodeEditor from "./CodeEditor";
import Instructions from "./Instructions";

const Exercise: React.FunctionComponent = () => {
  const { id } = useParams();
  const [exerciseData, setExerciseData] = useState<IExerciseDetails>();

  const getExercise = async () => {
    const response = await axios.get(
      `https://codegarden-api.azurewebsites.net/exercise/${id}`
    );
    setExerciseData(response.data);
  };

  React.useEffect(() => {
    getExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return exerciseData ? (
    <div className="flex items-center justify-center align-items-center min-h-screen">
      <CodeEditor
        codeFragments={exerciseData.codeFragments}
        codePrewritten={exerciseData.codePrewritten}
        taskId={id || "1"}
      />
      <Instructions exerciseInstruction={exerciseData.info} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Exercise;
