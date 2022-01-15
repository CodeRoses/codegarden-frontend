import React from "react";
import Dragula from "react-dragula";
import Code from "./Code";
import NegativeResponseModal from "./NegativeResponseModal";
import PositiveResponseModal from "./PositiveResponseModal";
import $ from "jquery";
import axios, { AxiosResponse } from "axios";

interface IProps {
  codePrewritten: string;
  codeFragments: string[];
  taskId: string;
}

const CodeEditor: React.FunctionComponent<IProps> = ({
  codeFragments,
  codePrewritten,
  taskId,
}) => {
  const [positiveResponse, setPositiveResponse] = React.useState(false);
  const [negativeResponse, setNegativeResponse] = React.useState(false);

  const getOrder = () => {
    return $(".code-fragment")
      .map(function () {
        return $(this).attr("id");
      })
      .get()
      .join("\n");
  };

  const showModal = async () => {
    const res: AxiosResponse<boolean> = await axios.post(
      `https://codegarden-api.azurewebsites.net/exercise/${taskId}/done`,
      {
        result: getOrder(),
      }
    );
    console.log(res.data);
    return res.data ? setPositiveResponse(true) : setNegativeResponse(true);
  };

  const dragulaDecorator = React.useRef(
    (componentBackingInstance: HTMLDivElement) => {
      if (componentBackingInstance) {
        const options = {};
        return Dragula([componentBackingInstance], options);
      }
    }
  );

  React.useEffect(() => {
    console.log(getOrder());
  }, []);

  return (
    <div className="bg-black p-10 bg-opacity-50 rounded-lg self-center">
      <div className="flex flex-col rounded bg-duotone-dark p-10">
        <Code code={codePrewritten} />
        <div className="container" ref={dragulaDecorator.current}>
          {codeFragments.map((fragment, index) => (
            <div
              className="border-t border-gray-700 code-fragment"
              key={index}
              id={`${fragment}`}
            >
              <Code code={fragment} />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-white text-2xl mt-10">
          <button
            className="bg-red-400 hover:bg-red-500 rounded-full py-2 px-4"
            onClick={showModal}
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
