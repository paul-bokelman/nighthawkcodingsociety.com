import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
// import { FiImage } from "react-icons/fi";

interface Props {
  name: string;
  items: Array<{ name: string; href: string }>;
  root: string;
}

export const Dropdown = ({ name, items, root }: Props) => {
  return (
    <div className="text-right z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center px-3 py-1 border-2 border-opacity-20 rounded-lg text-sm font-medium text-[#363D47] hover:text-[#48505a] hover:border-opacity-50">
            {name}
            <HiChevronDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right border-2 border-opacity-20 bg-white/5 rounded-lg shadow-lg backdrop-blur-lg">
            <div className="px-1 py-1 ">
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link href={`/${root.toLowerCase()}${item.href}`}>
                      <a
                        className={`${
                          active
                            ? "bg-black/20 text-black"
                            : "text-black text-opacity-80"
                        } group flex items-center rounded-md w-full px-2 py-2 text-sm hover:bg-black/5`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
