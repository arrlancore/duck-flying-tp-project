import Image from "next/image";
import React from "react";
import { checkMark, contentOption, slack } from "../src/assets/icons";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "../src/assets/images";
import Box from "./Box";
import Progress from "./Progress";
import Table from "./Table";
import Text from "./Text";

const ProjectsInfo = () => {
  return (
    <div
      className="flex space-y-4 md:space-y-0 space-x-0 
  md:space-x-4 pt-4 flex-col md:flex-row"
    >
      <Box className="flex-[5] flex justify-between w-full flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <Text variant="head2">Projects</Text>
            <div className="flex">
              <Image className="mr-1" alt="check-mark" {...checkMark} />
              <Text variant="caption">
                <b>30 done</b> this month
              </Text>
            </div>
          </div>

          <div
            className="p-2 cursor-pointer rounded-full
           hover:bg-gray-100 w-[37px] h-[37px]"
          >
            <Image {...contentOption} alt="option" />
          </div>
        </div>

        <Table
          rootStyle="mt-8"
          head={[
            { value: "Companies" },
            { value: "Members" },
            { value: "Budget" },
            { value: "Completion" },
          ]}
          body={[
            [
              {
                key: "companyName",
                value: ["Chakra Soft UI", slack.src],
                render: ([title, logo]) => {
                  return (
                    <div className="flex">
                      <Image
                        className="mr-2"
                        width={20}
                        height={20}
                        src={logo}
                        alt={title}
                      />{" "}
                      {title}
                    </div>
                  );
                },
              },
              {
                key: "members",
                value: [
                  avatar1.src,
                  avatar2.src,
                  avatar3.src,
                  avatar4.src,
                  avatar5.src,
                ],
                render: (value: string[]) => {
                  return (
                    <div className="flex relative">
                      {value.map((src, idx) => (
                        <Image
                          key={idx}
                          src={src}
                          alt="member"
                          width="18"
                          height="18"
                          className="relative left-0 top-0"
                          style={{ left: idx * -8 }}
                        />
                      ))}
                    </div>
                  );
                },
              },
              {
                key: "budget",
                value: 514000,
                render: (value) => {
                  const formatter = (n: number) =>
                    new Intl.NumberFormat().format(n);
                  return (
                    <div>{value ? `$${formatter(value)}` : "Not Set"}</div>
                  );
                },
              },
              {
                key: "completion",
                value: 60,
                render: (value) => (
                  <div className="flex flex-col">
                    <div>{value}</div>
                    <Progress pct={value} />
                  </div>
                ),
              },
            ],
          ]}
        />
      </Box>
      <Box className="flex-[2] flex justify-between w-full flex-col md:flex-row">
        journey
      </Box>
    </div>
  );
};

export default ProjectsInfo;
