import Image from "next/image";
import React from "react";
import {
  config,
  notifications,
  person,
  personGrey,
  search,
  settings,
} from "../src/assets/icons";
import Text from "./Text";

const Header = ({ title }: { title: string }) => {
  return (
    <section className="flex px-4 justify-between flex-col sm:flex-row">
      <div className="flex flex-col">
        <div className="text-xs font-normal text-gray-400">
          Pages <span className="text-gray-700">/ {title}</span>
        </div>
        <Text variant="head1">{title}</Text>
      </div>
      <div className="flex items-center">
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
        <div className="p-2 cursor-pointer flex text-gray-500 text-xs font-bold">
          <Image className="mr-1" alt="account" {...personGrey} /> Sign In
        </div>
        <div className="p-2 cursor-pointer">
          <Image alt="account" {...settings} />
        </div>
        <div className="p-2 cursor-pointer">
          <Image alt="account" {...notifications} />
        </div>
      </div>
    </section>
  );
};

export default Header;
