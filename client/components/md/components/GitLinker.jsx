import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
export const GitLinker = ({ title, permalink }) => {
  return (
    <div className="inline-block rounded-2xl bg-black/5 dark:bg-gray-100">
      <a href={permalink} className="!no-underline">
        <div className="content-center relative">
          <FaGithub className="inline relative ml-1.5 bottom-0.5 text-black dark:text-black" />
          <p className="inline relative ml-2 mr-3 bottom-[0.05rem] !text-black dark:!text-black !text-sm">
            {title}
          </p>
          <FiArrowUpRight className="inline absolute -right-1 bottom-4 text-black dark:text-black" />
        </div>
      </a>
    </div>
  );
};
