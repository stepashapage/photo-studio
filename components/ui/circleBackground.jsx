import React from "react";
import { cn } from "../../lib/utils";

const CircleBackground = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute w-[376px] h-[376px] rounded-[50%] blur-[200px] z-[1]",
        className
      )}
      style={{ backgroundColor: "rgba(237, 188, 90, 0.5)" }}
    ></div>
  );
};

export default CircleBackground;
