import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const Code: React.FunctionComponent<{ code: string }> = ({ code }) => {
  // TODO: Discuss what to do with user-select on mobile devices
  return (
    <div className="select-none md:select-auto">
      <Highlight {...defaultProps} code={code} language="python">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
