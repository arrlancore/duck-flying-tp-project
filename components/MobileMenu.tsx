import Link from "next/link";
import React from "react";
import { mobileMenus } from "./menus";

const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`${
        open ? `flex` : "hidden"
      } p-6 absolute top-10 bg-black-gradient right-0 
      mx-4 my-2 min-w-[140px] rounded-xl mobileMenu z-20`}
    >
      <ul className="list-none flex justify-end items-center flex-col flex-1">
        {mobileMenus.map((nav, index) => (
          <Link key={nav.id} href={nav.to}>
            <li
              className={`font-normal cursor-pointer text-white 
              text-[12px] px-4 py-2 active:opacity-80 ${
                index == mobileMenus.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
