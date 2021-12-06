import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/">
        <a className="block h-8 w-auto">
          <Image
            src="/logos/logo-black.png"
            width={32}
            height={32}
            alt="logo"
          />
        </a>
      </Link>
    </div>
  );
};
