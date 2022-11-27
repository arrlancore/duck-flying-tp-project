import React from "react";

// space using px
export const SpaceX = (
  props: React.HTMLAttributes<HTMLDivElement> & { w?: number }
) => {
  return <div style={{ width: `${props.w}rem` }} className={props.className} />;
};

export const SpaceY = (
  props: React.HTMLAttributes<HTMLDivElement> & { h?: number }
) => {
  return (
    <div style={{ height: `${props.h}rem` }} className={props.className} />
  );
};
