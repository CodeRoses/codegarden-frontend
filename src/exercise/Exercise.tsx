import React from "react";
import CodeEditor from "./CodeEditor";
import Instructions from "./Instructions";

const Exercise: React.FunctionComponent = () => {
  return (
    <div className="flex items-center justify-center align-items-center h-screen">
      <CodeEditor />
      <Instructions />
    </div>
  );
};

export default Exercise;
