import React from "react";
import Modal from "react-modal";
import hmmm from "../Hmmm.svg";

interface IProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

const style = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    overflow: "visible",
  },
};

const NegativeResponseModal: React.FunctionComponent<IProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={style}
    >
      <div className="bg-failure-grey border-failure-red border-4 rounded-2xl py-4 flex items-center justify-center flex-col shadow-dense">
        <h1 className="text-5xl mx-20">Coś poszło nie tak</h1>
        <div className="flex flex-col w-6/12 items-center self-end">
          <p className="text-xl text-gray-500">spróbuj jeszcze raz!</p>
        </div>
        <div className="mt-4 w-5/12 flex justify-center items-center">
          <button
            className="bg-failure-green rounded-lg py-1 px-4 my-3 text-xl shadow-dense"
            onClick={() => setIsOpen(false)}
          >
            Teraz się uda!
          </button>
        </div>
        <img
          src={hmmm}
          className="absolute bot-0 left-0 transform -translate-x-2/4 translate-y-2/4"
          alt="ok-logo"
        />
      </div>
    </Modal>
  );
};

export default NegativeResponseModal;
