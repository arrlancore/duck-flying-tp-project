import Image from "next/image";
import React, { useState } from "react";
import { logo, menu, close } from "../src/assets/icons";
import { brandName } from "../src/constants";
import GradientLine from "./GradientLine";
import MobileMenu from "./MobileMenu";

const Brand = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggleMobileMenu = () => setOpenMobileMenu((prev) => !prev);

  return (
    <div className="flex flex-row md:flex-col justify-between">
      <div className="flex p-2">
        <Image {...logo} alt="brand" />
        <h2 className="font-bold text-sm pl-2 leading-[30px]">{brandName}</h2>
      </div>
      {/* mobile menu */}
      <div
        onClick={() => toggleMobileMenu()}
        className="flex md:hidden rounded-full p-2 relative
        cursor-pointer flex-1 justify-end items-center"
      >
        {openMobileMenu ? (
          <Image
            {...close}
            className="w-[24px] h-[24px] object-contain"
            alt="menu"
          />
        ) : (
          <Image
            {...menu}
            className="w-[24px] h-[24px] object-contain"
            alt="menu"
          />
        )}

        <MobileMenu open={openMobileMenu} />
      </div>
      <GradientLine className="hidden md:block" />
    </div>
  );
};

export default Brand;
