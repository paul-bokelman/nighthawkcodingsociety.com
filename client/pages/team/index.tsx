import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
interface Props {}

const index: NextPage = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <div></div>
        </div>
      </div>

      <Link href="/team/about">
        <a className="text-blue-500">About</a>
      </Link>
      <Link href="/team/frqs/unit2">
        <a className="ml-4 text-blue-500">frqs</a>
      </Link>
    </div>
  );
};

export default index;
