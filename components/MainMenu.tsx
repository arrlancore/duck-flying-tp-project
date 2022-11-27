import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconProps } from "../src/types";
import DashboardIcon from "../src/assets/icon/components/Dashboard";
import CardIcon from "../src/assets/icon/components/Card";
import ChartIcon from "../src/assets/icon/components/Chart";
import ConfigIcon from "../src/assets/icon/components/Config";
import PersonIcon from "../src/assets/icon/components/Person";
import DocumentIcon from "../src/assets/icon/components/Document";
import RocketIcon from "../src/assets/icon/components/Rocket";

type TMenuItem = {
  id: string;
  Icon: (props: IconProps) => JSX.Element;
  title: string;
  to: string;
};

export const menus: Array<TMenuItem> = [
  {
    id: "main-menu-1",
    title: "Dashboard",
    to: "/",
    Icon: (props: IconProps) => <DashboardIcon {...props} />,
  },
  {
    id: "main-menu-2",
    title: "Tables",
    to: "/tables",
    Icon: (props: IconProps) => <ChartIcon {...props} />,
  },
  {
    id: "main-menu-3",
    title: "Billing",
    to: "/billing",
    Icon: (props: IconProps) => <CardIcon {...props} />,
  },
  {
    id: "main-menu-4",
    title: "RTL",
    to: "/rtl",
    Icon: (props: IconProps) => <ConfigIcon {...props} />,
  },
];

export const additionalMenus: Array<TMenuItem> = [
  {
    id: "additional-menu-1",
    title: "Profile",
    to: "/account/profile",
    Icon: (props: IconProps) => <PersonIcon {...props} />,
  },
  {
    id: "additional-menu-2",
    title: "Sign In",
    to: "/account/sign-in",
    Icon: (props: IconProps) => <DocumentIcon {...props} />,
  },
  {
    id: "additional-menu-3",
    title: "Sign Up",
    to: "/account/sign-up",
    Icon: (props: IconProps) => <RocketIcon {...props} />,
  },
];

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
        {menus.map((props) => (
          <li className="list-none" key={props.id}>
            <MenuItem {...props} isActive={router.pathname == props.to} />
          </li>
        ))}
      </ul>

      <h3 className="px-4 py-2 text-[12px] font-bold">ACCOUNT PAGES</h3>
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
