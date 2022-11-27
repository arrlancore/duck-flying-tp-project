import Image from "next/image";
import React from "react";
import { cart, config, rocket, wallet } from "../src/assets/icons";
import Box from "./Box";

const currentStats = [
  {
    id: "c-stat-1",
    title: "Users",
    amount: "32,984",
    percentage: 60,
    icon: wallet,
  },
  {
    id: "c-stat-2",
    title: "Clicks",
    amount: "2,42m",
    percentage: 80,
    icon: rocket,
  },
  {
    id: "c-stat-3",
    title: "Sales",
    amount: "2,400$",
    percentage: 42,
    icon: cart,
  },
  {
    id: "c-stat-4",
    title: "Items",
    amount: "320",
    percentage: 50,
    icon: config,
  },
];

const Stats = () => {
  return (
    <div
      className="flex space-y-4 sm:space-y-0 space-x-0 
  sm:space-x-4 pt-4 flex-col sm:flex-row"
    >
      <Box className="flex-[2] flex justify-between w-full flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <div className="w-full">Chart</div>
          <div className="w-full mt-2">
            <div
              className="font-bold text-lg 
            text-gray-700"
            >
              Active Users
            </div>
            <div className="font-normal text-sm text-gray-400">
              <span
                className="font-bold
               text-green-400"
              >
                (+23)
              </span>{" "}
              than last week
            </div>

            <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
              {currentStats.map((stat) => (
                <div key={stat.id} className="w-full">
                  <Box className="bg-secondary w-max p-2">
                    <Image alt="users" {...wallet} />
                  </Box>
                  <span>{stat.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
      <Box className="flex-[3] w-full relative overflow-hidden">
        Sales Overview
      </Box>
    </div>
  );
};

export default Stats;
