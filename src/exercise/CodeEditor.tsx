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

const CodeEditor: React.FunctionComponent = () => {
  const dragulaDecorator = React.useRef(
    (componentBackingInstance: HTMLDivElement) => {
      if (componentBackingInstance) {
        const options = {};
        Dragula([componentBackingInstance], options);
      }
    }
  );

  return (
    <div className="bg-black p-10 bg-opacity-70 rounded-lg self-center">
      <div className="flex flex-col rounded bg-duotone-dark p-10">
        <Code code={codePrewritten} />
        <div className="container" ref={dragulaDecorator.current}>
          {codeFragments.map((fragment) => (
            <div className="border-t border-gray-700">
              <Code code={fragment} />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-white text-2xl mt-10">
          <button className="bg-red-400 hover:bg-red-500 rounded-full py-2 px-4">
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
