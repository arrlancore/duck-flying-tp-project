import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  editIcon,
  mastercardIcon,
  mastercardWhite,
  paypal,
  textDocumentBlack,
  visaIcon,
  wallet,
} from "../../src/assets/icons";
import { formatDate } from "../../src/utils";
import Box from "../Box";
import GradientLine from "../GradientLine";
import Input from "../Input";
import { SpaceX } from "../Space";
import Text from "../Text";

const invoicesData = [
  {
    id: "MS-415641",
    date: "2022-11-29T02:43:14.577Z",
    amount: 240,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415642",
    date: "2022-04-01T02:43:14.577Z",
    amount: 180,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415643",
    date: "2022-05-06T02:43:14.577Z",
    amount: 120,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415644",
    date: "2021-02-02T02:43:14.577Z",
    amount: 300,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415645",
    date: "2022-01-01T02:43:14.577Z",
    amount: 560,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
];

const PaymentInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-[2]">
        <div className="w-full min-auto bg-chart-visit-gradient">
          <div
            className="flex w-full min-h-[200px] p-4 bg-radar2
            bg-no-repeat bg-cover"
          >
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between">
                <Text variant="head2" className="text-[#fff]">
                  Purity UI
                </Text>
                <Image
                  alt="card-logo"
                  src={mastercardWhite.src}
                  width={mastercardWhite.width}
                  height={mastercardWhite.height}
                />
              </div>

              <div className="flex flex-col">
                <Text variant="head2" className="text-[#fff]">
                  7812 2312 3234 XXXX
                </Text>

                <div className="flex pt-2">
                  <div className="flex flex-col">
                    <Text variant="caption" className="text-[#fff] text-[10px]">
                      VALID THRU
                    </Text>
                    <span className="text-[#fff] text-[14px]">05/24</span>
                  </div>
                  <div className="flex flex-col pl-8">
                    <Text variant="caption" className="text-[#fff] text-[10px]">
                      CVV
                    </Text>
                    <span className="text-[#fff] text-[14px]">09X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1] ml-0 sm:ml-4 mt-4 sm:mt-0 flex">
        <Box className="flex flex-col items-center text-center justify-center">
          <Box className="bg-secondary w-auto">
            <Image
              alt="salary"
              src={wallet.src}
              width={26}
              height={26}
              className="h-[26px]"
            />
          </Box>
          <Text variant="head2" className="mt-2">
            Salary
          </Text>
          <Text variant="caption" className="text-xs font-bold">
            Belong Interactive
          </Text>
          <GradientLine />
          <Text variant="head2">+$2000</Text>
        </Box>
      </div>
      <div className="flex-[1] ml-0 sm:ml-4 mt-4 sm:mt-0 flex">
        <Box className="flex flex-col items-center text-center justify-center">
          <Box className="bg-secondary w-auto">
            <Image
              alt="salary"
              src={paypal.src}
              width={26}
              height={26}
              className="h-[26px]"
            />
          </Box>
          <Text variant="head2" className="mt-2">
            Paypal
          </Text>
          <Text variant="caption" className="text-xs font-bold">
            Freelance Payment
          </Text>
          <GradientLine />
          <Text variant="head2">+$455</Text>
        </Box>
      </div>
    </div>
  );
};

const BillingPayment = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-[5]">
        <div className="flex flex-col">
          <div className="">
            <PaymentInfo />
          </div>
          <Box className="mt-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Text variant="head1">Payment Method</Text>
                <button className="px-6 py-2 bg-chart-visit-gradient hover:opacity-80 hover:shadow-md">
                  <Text
                    className="text-[10px] font-bold text-[#fff]"
                    variant="caption"
                  >
                    ADD A NEW CARD
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
            <Text variant="head2">Invoices</Text>
            <button
              className="py-2 px-6 border-solid font-bold
            rounded-2xl border-2 border-secondary
            text-xs text-secondary hover:opacity-80
            hover:shadow-md"
            >
              VIEW ALL
            </button>
          </div>
          <div className="flex flex-col">
            {invoicesData.map((data) => (
              <div
                key={data.id}
                className="flex justify-between items-center mt-4"
              >
                <div className="flex flex-col">
                  <Text variant="head2">
                    {formatDate(data.date, `MMM, dd, yyyy`)}
                  </Text>
                  <Text variant="caption">#{data.id}</Text>
                </div>
                <div className="flex">
                  <Text variant="caption">${data.amount}</Text>
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
