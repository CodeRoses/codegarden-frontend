import React from "react";
import Dragula from "react-dragula";
import Code from "./Code";
import NegativeResponseModal from "./NegativeResponseModal";
import PositiveResponseModal from "./PositiveResponseModal";

interface IProps {
  codePrewritten: string;
  codeFragments: string[];
}

const CodeEditor: React.FunctionComponent<IProps> = ({
  codeFragments,
  codePrewritten,
}) => {
  const [positiveResponse, setPositiveResponse] = React.useState(false);
  const [negativeResponse, setNegativeResponse] = React.useState(false);

  const showRandomModal = () => {
    const random = Math.random();
    console.log(random > 0.5);
    return random > 0.5 ? setPositiveResponse(true) : setNegativeResponse(true);
  };

  const dragulaDecorator = React.useRef(
    (componentBackingInstance: HTMLDivElement) => {
      if (componentBackingInstance) {
        const options = {};
        Dragula([componentBackingInstance], options);
      }
    }
  );

  return (
    <div className="bg-black p-10 bg-opacity-50 rounded-lg self-center">
      <div className="flex flex-col rounded bg-duotone-dark p-10">
        <Code code={codePrewritten} />
        <div className="container" ref={dragulaDecorator.current}>
          {codeFragments.map((fragment, index) => (
            <div className="border-t border-gray-700" key={index}>
              <Code code={fragment} />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-white text-2xl mt-10">
          <button
            className="bg-red-400 hover:bg-red-500 rounded-full py-2 px-4"
            onClick={showRandomModal}
          >
            Wyślij
          </button>
          <PositiveResponseModal
            isOpen={positiveResponse}
            setIsOpen={setPositiveResponse}
          />
          <NegativeResponseModal
            isOpen={negativeResponse}
            setIsOpen={setNegativeResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
