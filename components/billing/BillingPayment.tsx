import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  editIcon,
  mastercardIcon,
  textDocumentBlack,
  visaIcon,
} from "../../src/assets/icons";
import { invoicesDataPayment } from "../../src/mocks";
import { formatDate } from "../../src/utils";
import Box from "../Box";
import Input from "../Input";
import { SpaceX } from "../Space";
import Text from "../Text";
import BillingPaymentInfo from "./BillingPaymentInfo";

const caption = {
  paymentMethod: "Payment Method",
  addNewCard: "ADD A NEW CARD",
  invoices: "Invoices",
  viewAll: "VIEW ALL",
};

const BillingPayment = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-[5]">
        <div className="flex flex-col">
          <div className="">
            <BillingPaymentInfo />
          </div>
          <Box className="mt-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Text variant="head1">{caption.paymentMethod}</Text>
                <button className="px-6 py-2 bg-chart-visit-gradient hover:opacity-80 hover:shadow-md">
                  <Text
                    className="text-[10px] font-bold text-[#fff]"
                    variant="caption"
                  >
                    {caption.addNewCard}
                  </Text>
                </button>
              </div>
              <div className="flex justify-between mt-8 flex-col sm:flex-row">
                <div className="flex-[1]">
                  <Input
                    placeholder="7812 2139 0823 XXXX"
                    iconLeft={
                      <Image
                        className="absolute left-3 top-6"
                        alt="left-icon"
                        {...mastercardIcon}
                      />
                    }
                    iconRight={
                      <Image
                        className="absolute right-3 top-6"
                        alt="left-icon"
                        {...editIcon}
                      />
                    }
                  />
                </div>
                <SpaceX />
                <div className="flex-[1]">
                  <Input
                    placeholder="7812 2139 0823 XXXX"
                    iconLeft={
                      <Image
                        className="absolute left-3 top-7"
                        alt="left-icon"
                        {...visaIcon}
                      />
                    }
                    iconRight={
                      <Image
                        className="absolute right-3 top-6"
                        alt="left-icon"
                        {...editIcon}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="flex-[2] flex ml-0 md:ml-4 mt-4 md:mt-0">
        <Box>
          <div className="flex justify-between items-center">
            <Text variant="head2">{caption.invoices}</Text>
            <button
              className="py-2 px-6 border-solid font-bold
            rounded-2xl border-2 border-secondary
            text-xs text-secondary hover:opacity-80
            hover:shadow-md"
            >
              {caption.viewAll}
            </button>
          </div>
          <div className="flex flex-col">
            {invoicesDataPayment.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center mt-4"
              >
                <div className="flex flex-col">
                  <Text variant="head1">
                    {formatDate(data.date, `MMMM, dd, yyyy`)}
                  </Text>
                  <Text
                    style={{ fontSize: 12 }}
                    variant="caption"
                    className="font-bold"
                  >
                    #{data.id}
                  </Text>
                </div>
                <div className="flex">
                  <Text variant="caption" className="font-bold">
                    ${data.amount}
                  </Text>
                  <Link
                    target="_blank"
                    href={data.fileUrl}
                    className="flex pl-3"
                  >
                    <Image {...textDocumentBlack} alt="download-pdf" />
                    <Text variant="caption" className="text-[#000]">
                      PDF
                    </Text>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default BillingPayment;
