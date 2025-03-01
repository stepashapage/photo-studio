import { cn } from "@/lib/utils";
import React from "react";

export const Description = ({ className, text }) => {
  return (
    <p
      className={cn(
        "font-medium text-[18px] leading-[200%] opacity-80",
        className
      )}
    >
      {text}
    </p>
  );
};
