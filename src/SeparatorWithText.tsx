import React from "react";

interface TextProp {
  textContent: string;
  className: string;
  backgroundColor: string;
}

const SeparatorWithText: React.FunctionComponent<TextProp> = ({
  textContent,
  className,
  backgroundColor,
}) => {
  return (
    <div className={`w-full h-5 border-b text-center ${className}`}>
      <span className={`text-lg px-3 ${backgroundColor}`}>{textContent}</span>
    </div>
  );
};

export default SeparatorWithText;
