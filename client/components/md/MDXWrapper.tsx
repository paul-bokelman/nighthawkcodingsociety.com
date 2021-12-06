import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import { Code, GitLinker } from "./components";
interface Props {
  children: React.ReactChild[];
}

export const MDXWrapper = ({ children }: Props) => {
  const components = {
    pre: (preProps: any) => {
      const props = preToCodeBlock(preProps);
      if (props) {
        return <Code {...props} />;
      }
      return <pre {...preProps} />;
    },
    GitLinker,
  };
  return (
    <MDXProvider components={components}>
      <div className="w-full mt-4 mb-20">
        <div className="flex justify-center w-full lg:w-3/4 mx-auto">
          <div className="max-w-full">
            <article className="prose dark:prose-dark prose-sm md:prose-lg">
              {children}
            </article>
          </div>
        </div>
      </div>
    </MDXProvider>
  );
};
