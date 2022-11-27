import Image from "next/image";
import React from "react";
import { logo } from "../src/assets/icons";
import { brandName } from "../src/constants";

const Brand = () => {
  return (
    <>
      <div className="flex p-2">
        <Image {...logo} alt="brand" />
        <h2 className="font-bold text-sm pl-2 leading-[30px]">{brandName}</h2>
      </div>
      {/* gradient line */}
      <hr className="w-full hidden sm:block outline-none border-[0px] my-2 rounded-sm h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </>
  );
};

export default Brand;
