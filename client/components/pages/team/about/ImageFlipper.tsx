import React, { useState } from "react";
import Image from "next/image";

export const ImageFlipper = (): JSX.Element => {
  const c: string[] = ["red", "blue", "green", "pink"];
  const [current, setCurrent] = useState<string>(
    c[Math.floor(Math.random() * c.length)]
  );

  const handleClick = (): void => {
    const cr = c[Math.floor(Math.random() * c.length)];
    if (cr !== current) {
      setCurrent(cr);
    } else {
      handleClick();
    }
  };

  return (
    <Image
      onMouseEnter={handleClick}
      //   onMouseEnter={handleClick}
      className="cursor-pointer rounded-lg"
      src={`/about/${current}.png`}
      alt="pfp"
      width="50px"
      height="50px"
    />
  );
};
