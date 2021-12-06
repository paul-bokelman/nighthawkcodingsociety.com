import React from "react";
import { StandAlone } from "../components";
import { navConfig } from "../navConfig";
export const Main = () => {
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
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navigationConfig().map((item) => (
          <StandAlone key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
