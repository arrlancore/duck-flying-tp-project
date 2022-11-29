import React from "react";
import { IconProps } from "../src/types";
import DashboardIcon from "../src/assets/icon/components/Dashboard";
import CardIcon from "../src/assets/icon/components/Card";
import ChartIcon from "../src/assets/icon/components/Chart";
import ConfigIcon from "../src/assets/icon/components/Config";
import PersonIcon from "../src/assets/icon/components/Person";
import DocumentIcon from "../src/assets/icon/components/Document";
import RocketIcon from "../src/assets/icon/components/Rocket";

export type TMenuItem = {
  id: string;
  Icon: (props: IconProps) => JSX.Element;
  title: string;
  to: string;
};

export const mainMenus: Array<TMenuItem> = [
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
  {
    id: "additional-menu-4",
    title: "RTL",
    to: "#rtl",
    Icon: (props: IconProps) => <ConfigIcon {...props} />,
  },
];

export const mobileMenus = [
  ...mainMenus,
  ...additionalMenus,
  {
    id: "main-menu-4",
    title: "Documentation",
    to: "#doc",
    Icon: () => <span />,
  },
];
