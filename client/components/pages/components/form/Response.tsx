import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { MdError } from "react-icons/md";
interface Props {
  response: {
    status: boolean | undefined;
    message: string;
  };
}

export const Response = ({ response }: Props): JSX.Element => {
  console.log(response);
  if (response.status !== undefined) {
    return (
      <div
        className={`${
          response.status
            ? "bg-green-400/20 text-green-600"
            : "!bg-red-400/20 text-red-600"
        } mt-3 w-full px-2 py-1 rounded-xl font-medium`}
      >
        <div className="relative flex flex-row items-center justify-left ">
          {response.status ? (
            <HiCheckCircle className="absolute -left-7 h-12 w-12 z-10" />
          ) : (
            <MdError className="absolute -left-7 h-12 w-12 z-10" />
          )}
          <div className="absolute -left-7 h-12 w-12 bg-white rounded-full" />
          <div className="ml-7">{response.message}</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
