import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { navConfig } from "../navConfig";

export const Panel = () => {
  const navigationConfig = () => {
    const navigation: { label: string; href: string }[] = [];
    Object.keys(navConfig)
      .map((key) => navConfig[key])
      .map((item) => Object.keys(item))
      .map((item) =>
        item.map((t) =>
          Object.keys(navConfig)
            .map((key) => navConfig[key])
            .map((c) =>
              t in c
                ? navigation.push({ label: c[t].label, href: c[t].href })
                : null
            )
        )
      );
    return navigation;
  };
  return (
    <Disclosure.Panel className="sm:hidden ">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigationConfig().map((item) => (
          <Link key={item.label} href={item.href}>
            <a
              className="block px-3 py-2 border-2 border-opacity-20 rounded-lg text-sm font-medium text-[#363D47]"
              activeClassName="bg-gray-900 !text-white border-opacity-100 !bg-white !bg-opacity-10"
            >
              {item.label}
            </a>
          </Link>
        ))}
      </div>
    </Disclosure.Panel>
  );
};
