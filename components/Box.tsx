import React, { HTMLAttributes } from "react";

const Box = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`w-full bg-white p-4 rounded-[15px] shadow-sm ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
