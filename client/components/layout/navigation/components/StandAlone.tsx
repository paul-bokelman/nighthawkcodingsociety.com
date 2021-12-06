import React from "react";
import Link from "next/link";
interface Props {
  label: string;
  href: string;
}

export const StandAlone = ({ label, href }: Props): JSX.Element => (
  <Link key={label} href={href}>
    <a
      className="px-3 py-1 border-2 border-opacity-20 rounded-lg text-sm font-medium text-[#363D47] hover:text-[#363D47] hover:border-opacity-50"
      // activeClassName="bg-gray-900 !text-white border-opacity-100 !bg-white !bg-opacity-10"
    >
      {label}
    </a>
  </Link>
);
