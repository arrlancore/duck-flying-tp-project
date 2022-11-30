import Image from "next/image";
import React from "react";
import { calendar, deleteIcon, editIcon } from "../../src/assets/icons";
import {
  infoDataBilling,
  transactionNewDataBilling,
  transactionYesterdayDataBilling,
} from "../../src/mocks";
import { formatDate } from "../../src/utils";
import Box from "../Box";
import { SpaceY } from "../Space";
import Text from "../Text";

type TransactionBadgeStatus = "in" | "out" | "pending";

const TransactionBadge = ({
  statuses,
}: {
  statuses: TransactionBadgeStatus;
}) => {
  let color = "#000";
  let symbol = "!";

  switch (statuses) {
    case "in":
      color = "red-500";
      symbol = "↓";
      break;
    case "out":
      color = "green-400";
      symbol = "↑";
      break;

    default:
      color = "gray-400";
      break;
  }

  return (
    <div
      style={{
        border: "1px solid",
      }}
      className={`w-[35px] h-[35px] rounded-full mr-3 border-${color}
      flex items-center mx-auto justify-center text-${color}`}
    >
      {symbol}
    </div>
  );
};

const TransactionAmount = (props: {
  statuses: TransactionBadgeStatus;
  amount: number;
}) => {
  if (props.statuses == "pending") {
    return <span>Pending</span>;
  } else if (props.statuses == "in") {
    return <span className="text-red-500">-${props.amount}</span>;
  }
  return <span className="text-green-400">+${props.amount}</span>;
};

const caption = {
  billInfo: "Billing Information",
  yourTransactions: "Your Transactions",
  newest: "NEWEST",
  yesterday: "YESTERDAY",
  edit: "EDIT",
  delete: "DELETE",
  companyName: "Company Name",
  email: "Email Address",
  vat: "VAT Number",
  periodTransaction: "20 - 30 March 2022",
  at: " at ",
};

const BillingInformation = () => {
  return (
    <div className="flex mt-4 flex-col md:flex-row">
      <Box className="flex-[4]">
        <Text variant="head2">{caption.billInfo}</Text>
        {infoDataBilling.map((data) => (
          <Box key={data.id} className="bg-gray-100 shrink-0 rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <Text variant="head1" className="text-gray-500">
                {data.name}
              </Text>

              <div className="flex">
                <button
                  className="flex items-center font-bold hover:opacity-80
               text-[10px] text-red-500"
                >
                  <Image alt="delete" className="mr-1" {...deleteIcon} />{" "}
                  {caption.delete}
                </button>
                <button
                  className="flex items-center font-bold hover:opacity-80
               text-[10px] ml-3"
                >
                  <Image alt="edit" className="mr-1" {...editIcon} />{" "}
                  {caption.edit}
                </button>
              </div>
            </div>
            <Text variant="caption" className="block text-xs">
              {caption.companyName}:{" "}
              <b className="text-gray-500">{data.companyName}</b>
            </Text>
            <Text variant="caption" className="block text-xs">
              {caption.email}:{" "}
              <b className="text-gray-500">{data.emailAddress}</b>
            </Text>
            <Text variant="caption" className="block text-xs">
              {caption.vat}: <b className="text-gray-500">{data.vatNumber}</b>
            </Text>
          </Box>
        ))}
      </Box>
      <Box className="flex-[3] ml-0 md:ml-4 mt-4 md:mt-0">
        <div className="flex justify-between items-left md:items-center flex-col md:flex-row">
          <Text variant="head2">{caption.yourTransactions}</Text>
          <Text className="font-bold flex">
            <Image {...calendar} alt="period" className="mr-1" />{" "}
            {caption.periodTransaction}
          </Text>
        </div>

        <Text variant="caption" className="mt-4 block text-[10px] font-bold">
          {caption.newest}
        </Text>
        <SpaceY />
        {transactionNewDataBilling.map(
          ({ amount, purpose, date, id, statuses }, idx) => (
            <div
              key={id}
              className={`flex justify-between items-center mt-${
                idx == 0 ? 0 : 2
              }`}
            >
              <div className="flex items-center">
                <TransactionBadge
                  statuses={statuses as TransactionBadgeStatus}
                />
                <div className="flex flex-col">
                  <Text variant="head1">{purpose}</Text>
                  <Text variant="caption" className="font-bold text-xs">
                    {formatDate(date, `dd MMMM yyyy,`) +
                      caption.at +
                      formatDate(date, `hh:mm aa`)}
                  </Text>
                </div>
              </div>
              <div className="flex">
                <Text variant="caption" className="font-bold">
                  <TransactionAmount
                    statuses={statuses as TransactionBadgeStatus}
                    amount={amount}
                  />
                </Text>
              </div>
            </div>
          )
        )}
        <Text variant="caption" className="mt-4 block text-[10px] font-bold">
          {caption.yesterday}
        </Text>
        <SpaceY />
        {transactionYesterdayDataBilling.map(
          ({ amount, purpose, date, id, statuses }, idx) => (
            <div
              key={id}
              className={`flex justify-between items-center mt-${
                idx == 0 ? 0 : 2
              }`}
            >
              <div className="flex items-center">
                <TransactionBadge
                  statuses={statuses as TransactionBadgeStatus}
                />
                <div className="flex flex-col">
                  <Text variant="head1">{purpose}</Text>
                  <Text variant="caption" className="font-bold text-xs">
                    {formatDate(date, `dd MMMM yyyy,`) +
                      caption.at +
                      formatDate(date, `hh:mm aa`)}
                  </Text>
                </div>
              </div>
              <div className="flex">
                <Text variant="caption" className="font-bold">
                  <TransactionAmount
                    statuses={statuses as TransactionBadgeStatus}
                    amount={amount}
                  />
                </Text>
              </div>
            </div>
          )
        )}
      </Box>
    </div>
  );
};

export default BillingInformation;
