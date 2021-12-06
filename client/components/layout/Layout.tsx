import React from "react";
import { Navigation, Footer } from ".";

interface Props {
  children: React.ReactChild;
}

export const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Navigation />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = ({
  children,
}: {
  children: React.ReactChild[];
}): JSX.Element => {
  return <div className="m-0 pt-2 px-20">{children}</div>;
};
