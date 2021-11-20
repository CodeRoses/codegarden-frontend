import React from "react";
import Dragula from "react-dragula";
import Code from "./Code";

const codePrewritten = `torba_sersi = []

kociolek = ['snickers', 'rodzynki', 'czekolada', 'zelki', 'ciastka']

`;

const codeFragments = [
  `  if cukierek != 'rodzynki':
      torba_sersi.push(cukierek)`,
  `print(f"Sersi ma {len(torba_sersi)} cukierki w swojej torbie!")`,
  `for cukierek in kociolek:`,
];

const CodeEditor = () => {
  const dragulaDecorator = React.useRef((componentBackingInstance: any) => {
    if (componentBackingInstance) {
      const options = {};
      Dragula([componentBackingInstance], options);
    }
  });

  return (
    <div className="bg-black p-10 bg-opacity-70 rounded-lg">
      <div className="flex flex-col rounded bg-duotone-dark p-10">
        <Code code={codePrewritten} />
        <div className="container" ref={dragulaDecorator.current}>
          {codeFragments.map((fragment) => (
            <div className="border-t border-gray-700">
              <Code code={fragment} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 rounded-2xl text-white p-2">
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
