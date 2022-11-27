import Image from "next/image";
import React from "react";
import { cart, globe, textDocument, wallet } from "../src/assets/icons";
import Box from "./Box";

const summaries = [
  {
    id: "summary-1",
    title: "Today's Money",
    amount: "$ 53,000",
    percentage: 55,
    icon: wallet,
  },
  {
    id: "summary-2",
    title: "Today's Users",
    amount: "2,300",
    percentage: 5,
    icon: globe,
  },
  {
    id: "summary-3",
    title: "New Clients",
    amount: "+3,052",
    percentage: -14,
    icon: textDocument,
  },
  {
    id: "summary-4",
    title: "Total Sales",
    amount: "$173,000",
    percentage: 8,
    icon: cart,
  },
];

const Summary = () => {
  return (
    <div className="pt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
      {summaries.map((sum) => (
        <Box key={sum.id}>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="text-xs leading-4 text-gray-400">{sum.title}</div>
              <div className="text-gray-700 font-bold leading-6">
                {sum.amount}{" "}
                <span
                  className={`text-xs ${
                    sum.percentage < 0 ? "text-red-500" : "text-green-400"
                  }`}
                >
                  {sum.percentage < 0
                    ? `${sum.percentage}%`
                    : `+${sum.percentage}%`}
                </span>
              </div>
            </div>
            <Box className="bg-secondary p-2 w-auto">
              <Image alt={sum.title} {...sum.icon} />
            </Box>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default Summary;
