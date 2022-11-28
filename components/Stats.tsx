import Image from "next/image";
import React from "react";
import Config from "../src/assets/icon/components/Config";
import Rocket from "../src/assets/icon/components/Rocket";
import { cart, config, rocket, wallet } from "../src/assets/icons";
import { IconProps } from "../src/types";
import Box from "./Box";
import Progress from "./Progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Brush,
  AreaChart,
  Area,
} from "recharts";

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
    icon: (props: IconProps) => <Rocket {...props} />,
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
    icon: (props: IconProps) => <Config {...props} />,
  },
];

const dataVisitor = [
  {
    date: "1/11/2022",
    visitor: 400,
  },
  {
    date: "2/11/2022",
    visitor: 300,
  },
  {
    date: "3/11/2022",
    visitor: 150,
  },
  {
    date: "4/11/2022",
    visitor: 200,
  },
  {
    date: "5/11/2022",
    visitor: 500,
  },
  {
    date: "6/11/2022",
    visitor: 234,
  },
  {
    date: "7/11/2022",
    visitor: 111,
  },
  {
    date: "8/11/2022",
    visitor: 322,
  },
];

const dataSales = [
  {
    name: "Jan",
    uv: 4600,
    pv: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 4800,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
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
          <div className="w-full h-[222px] bg-chart-visit-gradient py-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={dataVisitor}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <YAxis style={{ fill: "#fff", fontSize: 12 }} color="#fff" />
                <Tooltip />
                <Bar
                  dataKey="visitor"
                  fill="#ffffff"
                  radius={[15, 15, 15, 15]}
                  maxBarSize={7}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
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

            <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 xl:gap-12">
              {currentStats.map((stat) => (
                <div key={stat.id} className="w-full">
                  <div className="flex items-center">
                    <Box className="bg-secondary w-max p-2 rounded-lg">
                      {typeof stat.icon === "object" ? (
                        <Image
                          alt="users"
                          {...stat.icon}
                          className="w-[13px] h-[13px]"
                        />
                      ) : (
                        <stat.icon fill="white" width="13" height="13" />
                      )}
                    </Box>
                    <span className="font-bold text-xs text-gray-400 pl-2">
                      {stat.title}
                    </span>
                  </div>
                  <div
                    className="font-bold text-lg 
                  text-gray-700 pt-2"
                  >
                    {stat.amount}
                  </div>
                  <Progress pct={stat.percentage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
      <Box className="flex-[3] w-full relative overflow-hidden">
        <div
          className="font-bold text-lg 
            text-gray-700"
        >
          Sales Overview
        </div>
        <div className="font-normal text-sm text-gray-400">
          <span
            className="font-bold
               text-green-400"
          >
            (+5) more
          </span>{" "}
          in 2021
        </div>

        <ResponsiveContainer className="pt-4" width="100%" height={300}>
          <AreaChart
            width={500}
            height={300}
            data={dataSales}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              style={{ fill: "#ddd", fontSize: 12, fontWeight: "bold" }}
              dataKey="name"
            />
            <YAxis style={{ fill: "#ddd", fontSize: 12, fontWeight: "bold" }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#4FD1C5"
              strokeWidth={2}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#2D3748"
              strokeWidth={2}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default Stats;
