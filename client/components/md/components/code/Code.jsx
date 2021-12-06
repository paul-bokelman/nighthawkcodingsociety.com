import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
// import { useStore } from "../../hooks";
import { Dark, Light } from "./highlight";

export const Code = ({ codeString, language, metastring, ...props }) => {
  // const dark = useStore((state) => state.dark);
  const dark = true;
  const [copied, setCopied] = useState(false);

  const getCopyable = (meta) => {
    if (meta !== undefined) {
      if (meta.includes("/copy/")) {
        return true;
      }
    }
  };

  const copyFunction = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRenderLineNumbers = (meta) => {
    if (meta !== undefined) {
      if (meta.includes("-r-")) {
        return true;
      }
    }
  };

  const copyable = getCopyable(metastring);
  const renderLineNumber = getRenderLineNumbers(metastring);

  return (
    <div className="">
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={!dark ? Dark : Light}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className="relative" data-language={language}>
            {copyable ? (
              <div className="absolute right-4 top-3">
                {copied ? (
                  <span className="cursor-pointer px-3 py-1 text-xs text-white bg-blue-500 dark:text-blue-500 dark:bg-blue-500/10 rounded-lg">
                    copied!
                  </span>
                ) : (
                  <span
                    className="cursor-pointer px-3 py-1 text-xs text-white bg-green-500 dark:text-green-500 dark:bg-green-500/10 rounded-lg"
                    onClick={copyFunction}
                    onKeyDown={copyFunction}
                    role="presentation"
                  >
                    copy
                  </span>
                  // <MdContentCopy onClick={copyFunction} />
                )}
              </div>
            ) : null}
            <pre className={className} style={{ ...style }}>
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index });
                return (
                  <div key={index} {...lineProps}>
                    {renderLineNumber ? (
                      <span className="inline-block w-[2em] opacity-50">
                        {index + 1}
                      </span>
                    ) : null}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  );
};
