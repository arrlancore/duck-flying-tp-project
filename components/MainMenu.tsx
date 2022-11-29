import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { additionalMenus, mainMenus, TMenuItem } from "./menus";

const captions = {
  accountPages: "ACCOUNT PAGES",
};

const MenuItem = ({
  isActive,
  Icon,
  title,
  to,
}: TMenuItem & { isActive: boolean }) => {
  return (
    <Link href={to}>
      <div
        className={`w-full flex items-center p-4 rounded-[15px] cursor-pointer ${
          isActive ? "bg-white shadow-md" : ""
        } hover:opacity-50`}
      >
        <div
          className={`flex p-2 rounded-xl
          shadow-sm
        ${isActive ? "bg-secondary" : "bg-white"}`}
        >
          <Icon fill={isActive ? "#fff" : undefined} />
        </div>

        <span
          className={`pl-2 font-bold text-[12px] 
        leading-[18px] ${isActive ? "text-gray-700" : "text-gray-400"}`}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="mt-4 hidden md:block">
      <ul>
        {mainMenus.map((props) => (
          <li className="list-none" key={props.id}>
            <MenuItem {...props} isActive={router.pathname == props.to} />
          </li>
        ))}
      </ul>

      <h3 className="px-4 py-2 text-[12px] font-bold">
        {captions.accountPages}
      </h3>
      <ul className="flex-1">
        {additionalMenus.map((props) => (
          <li className="list-none" key={props.id}>
            <MenuItem {...props} isActive={router.pathname == props.to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
