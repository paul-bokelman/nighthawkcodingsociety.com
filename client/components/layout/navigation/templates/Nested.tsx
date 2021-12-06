import React from "react";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Dropdown } from "../components";
import { navConfig } from "../navConfig";

interface Props {
  route: string;
}

type DropdownItem = {
  name: string;
  items: Array<{ name: string; href: string }>;
};

interface Dropdown {
  name: string;
  items: DropdownItem[];
}

export const Nested = ({ route }: Props) => {
  const section: Dropdown = navConfig.dropdowns[route.replace(/\//g, "")];
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Link href="/">
          <a className="relative px-3 py-1 border-2 border-opacity-0 rounded-lg text-sm font-medium text-[#9ca3af]">
            {section.name}
            <RiArrowDropRightLine className="inline absolute top-1.5 text-lg" />
          </a>
        </Link>
        {section.items.map((items) => (
          <Dropdown
            key={items.name}
            root={section.name}
            name={items.name}
            items={items.items}
          />
        ))}
      </div>
    </div>
  );
};
