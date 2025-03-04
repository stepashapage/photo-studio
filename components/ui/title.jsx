import { cn } from "../../lib/utils";
import React from "react";

export const Title = ({ className, className1, className2, text, strong }) => {
  return (
    <div className={className}>
      <h1
        className={cn("text-white", className1)}
        style={{
          textShadow:
            "1px 1px 0 #C3BE10, -1px -1px 0 #C3BE10, 1px -1px 0 #C3BE10, -1px 1px 0 #C3BE10",
        }}
      >
        {text}
      </h1>
      <h1
        className={cn("", className2)}
        style={{ WebkitTextStroke: "0.5px #C3BE10", color: "transparent" }}
      >
        {strong}
      </h1>
    </div>
  );
};
