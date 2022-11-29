import Image from "next/image";
import React, { HTMLAttributes } from "react";

type IconUrl = string;
type IconWidth = number;
type IconHeight = number;
type IconProperty = [IconUrl, IconWidth, IconHeight];

type Props = HTMLAttributes<HTMLInputElement> & {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const Input = ({ iconLeft, iconRight, className, ...props }: Props) => {
  let additionalStyle = "";
  if (iconLeft) {
    additionalStyle += "pl-11";
  }
  if (iconRight) {
    additionalStyle = additionalStyle ? additionalStyle + " pr-11" : "pr-11";
  }
  return (
    <div className="relative">
      {iconLeft}
      <input
        className={`outline-none min-w-[200px] w-full border-solid
        border-[1px] border-gray-200
        h-[65px] rounded-xl px-2 text-sm
        text-gray-400 ${additionalStyle} ${className}`}
        {...props}
      />
      {iconRight}
    </div>
  );
};

export default Input;
