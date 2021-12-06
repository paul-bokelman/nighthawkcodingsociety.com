import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const FRQPagination = () => {
  const router = useRouter();
  let p = Number(router.pathname.split("/team/frqs/unit")[1]);
  const bounds = [2, 3];
  const lastDisabled = p - 1 === bounds[0] - 1;
  const nextDisabled = p + 1 === bounds[1] + 1;
  return (
    <div className="w-full py-2 flex flex-row items-center justify-between">
      <Link href={`/team/frqs/unit${p - 1}`}>
        <a
          className={`${
            lastDisabled ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <FaLongArrowAltLeft
            className={`${lastDisabled ? "text-black/10" : "text-black"}`}
          />
        </a>
      </Link>
      <p className="uppercase text-xs font-bold">unit {p}</p>
      <Link href={`/team/frqs/unit${p + 1}`}>
        <a
          className={`${
            nextDisabled ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <FaLongArrowAltRight
            className={`${nextDisabled ? "text-black/10" : "text-black"}`}
          />
        </a>
      </Link>
    </div>
  );
};
