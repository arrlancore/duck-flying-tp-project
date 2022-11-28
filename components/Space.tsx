import React from "react";

// space using px
export const SpaceX = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`w-4 h-1 ${props.className ?? ""} `} />;
};

export const SpaceY = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`h-4 ${props.className ?? ""} `} />;
};
