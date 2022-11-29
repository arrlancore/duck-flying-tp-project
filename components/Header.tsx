import Image from "next/image";
import React from "react";
import {
  config,
  notifications,
  notificationsWhite,
  person,
  personGrey,
  personWhite,
  search,
  settings,
  settingsWhite,
} from "../src/assets/icons";
import Text from "./Text";

type HeaderVariant = "primary" | "secondary";

const adjustColorByVariant = (isSecondary: boolean, defaultColor: string) => {
  return isSecondary ? "[#fff]" : defaultColor;
};

const Header = ({
  title,
  variant,
}: {
  title: string;
  variant?: HeaderVariant;
}) => {
  const isSecondary = variant == "secondary";
  const [personIcon, settingIcon, notificationIcon] = [
    isSecondary ? personWhite : personGrey,
    isSecondary ? settingsWhite : settings,
    isSecondary ? notificationsWhite : notifications,
  ];

  return (
    <section className="flex px-4 justify-between flex-col sm:flex-row z-10">
      <div className="flex flex-col">
        <div
          className={`text-xs font-normal text-${adjustColorByVariant(
            isSecondary,
            "gray-400"
          )}`}
        >
          Pages{" "}
          <span
            className={`text-${adjustColorByVariant(isSecondary, "gray-700")}`}
          >
            / {title}
          </span>
        </div>
        <Text
          variant="head1"
          className={`text-${adjustColorByVariant(isSecondary, "gray-700")}`}
        >
          {title}
        </Text>
      </div>
      <div className="flex items-center justify-between sm:justify-start">
        {/* search input */}
        <div className="flex relative">
          <input
            placeholder="Type Here..."
            type="text"
            style={{ borderWidth: "1px" }}
            className="outline-none min-w-[200px] border-solid
          border-2 border-gray-200
          h-[40px] rounded-[15px] pl-7 pr-2 text-xs
          text-gray-400"
          />
          <Image className="absolute left-2 top-3" alt="search" {...search} />
        </div>
        <div
          className={`p-2 cursor-pointer flex text-${adjustColorByVariant(
            isSecondary,
            "gray-500"
          )} text-xs font-bold`}
        >
          <Image className="mr-1" alt="account" {...personIcon} /> Sign In
        </div>
        <div className="p-2 cursor-pointer">
          <Image alt="account" {...settingIcon} />
        </div>
        <div className="p-2 cursor-pointer">
          <Image alt="account" {...notificationIcon} />
        </div>
      </div>
    </section>
  );
};

export default Header;
