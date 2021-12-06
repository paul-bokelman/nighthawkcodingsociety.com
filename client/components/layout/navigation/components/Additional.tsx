import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";

export const Additional = () => {
  // const { toggleTheme, dark } = useStore();
  const toggleTheme = () => console.log("toggled");
  const dark = false;
  const nis = [
    {
      name: "github",
      href: "https://github.com/paul-bokelman/nighthawk_society",
      func: null,
      icon: (
        <FaGithub className="h-6 w-6 text-[#363D47] hover:text-[#576270]" />
      ),
    },
    {
      name: "darkmode",
      href: null,
      func: toggleTheme,
      icon: (
        <CgDarkMode className="h-6 w-6 text-[#363D47] hover:text-[#576270]" />
      ),
    },
  ];
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {nis.map((p, index) => {
        if (p.href === null) {
          return (
            <NavIcon key={index} name={p.name} func={p.func} icon={p.icon} />
          );
        } else {
          return (
            <NavIcon key={index} name={p.name} href={p.href} icon={p.icon} />
          );
        }
      })}
    </div>
  );
};

interface Props {
  name: string;
  href?: string;
  icon: React.ReactElement;
  func?: () => void;
}

const NavIcon = ({ name, href, icon, func }: Props): JSX.Element => {
  return (
    <div className="ml-3 relative">
      {href === undefined ? (
        <button
          onClick={func}
          className="flex text-sm rounded-full cursor-pointer"
        >
          <span className="sr-only">Go to {name}</span>
          {icon}
        </button>
      ) : (
        <a href={href} className="flex text-sm rounded-full">
          <span className="sr-only">Go to {name}</span>
          {icon}
        </a>
      )}
    </div>
  );
};
