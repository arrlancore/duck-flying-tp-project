import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { contentOption } from "../src/assets/icons";

const OptionIcon = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`p-2 cursor-pointer rounded-full
           hover:bg-gray-100 w-[37px] h-[37px]
           ${className}`}
      {...props}
    >
      <Image {...contentOption} alt="option" />
    </div>
  );
};

export default OptionIcon;
