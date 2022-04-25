import React, { useState } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Main, Nested } from "./templates";
import { Additional, Logo, Panel } from "./components";

export const Navigation = () => {
  const router = useRouter();

  return (
    <Wrapper>
      {router.pathname.includes("csa") || router.pathname.includes("csp") ? (
        <Nested route={`/${router.pathname.split("/")[1]}`} />
      ) : (
        <Main />
      )}
    </Wrapper>
  );
};

const Wrapper = ({ children }: { children: React.ReactChild }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="mt-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-full text-[#343D47] hover:text-opacity-50">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <GrClose
                  className="block h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <HiOutlineMenu
                  className="block h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </Disclosure.Button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch md:justify-between">
            <Logo />
            {children}
            <Additional />
          </div>
        </div>
      </div>

      <Panel />
    </Disclosure>
  );
};
