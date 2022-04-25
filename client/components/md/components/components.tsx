import { preToCodeBlock } from "mdx-utils";
import { GitLinker, Code, Likes } from ".";

export const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
  GitLinker,
  Likes,
};
