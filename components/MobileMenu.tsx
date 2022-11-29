import Link from "next/link";
import React from "react";

export const menus = [
  {
    id: "main-menu-1",
    title: "Dashboard",
    to: "/",
  },
  {
    id: "main-menu-2",
    title: "Tables",
    to: "/tables",
  },
  {
    id: "main-menu-3",
    title: "Billing",
    to: "/billing",
  },
  {
    id: "main-menu-4",
    title: "RTL",
    to: "#rtl",
  },
  {
    id: "additional-menu-1",
    title: "Profile",
    to: "/account/profile",
  },
  {
    id: "additional-menu-2",
    title: "Sign In",
    to: "/account/sign-in",
  },
  {
    id: "additional-menu-3",
    title: "Sign Up",
    to: "/account/sign-up",
  },
  {
    id: "additional-menu-4",
    title: "Documentation",
    to: "#",
  },
];

const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`${
        open ? `flex` : "hidden"
      } p-6 absolute top-10 bg-black-gradient right-0 
      mx-4 my-2 min-w-[140px] rounded-xl mobileMenu z-20`}
    >
      <ul className="list-none flex justify-end items-center flex-col flex-1">
        {menus.map((nav, index) => (
          <Link key={nav.id} href={nav.to}>
            <li
              className={`font-normal cursor-pointer text-white text-[12px] ${
                index == menus.length - 1 ? "mb-0" : "mb-4"
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
