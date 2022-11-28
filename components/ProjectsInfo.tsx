import Image from "next/image";
import React from "react";
import {
  adobeXd,
  atlassian,
  checkMark,
  contentOption,
  invision,
  slack,
  spotify,
} from "../src/assets/icons";
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

const renderer = {
  companyName: ([title, logo]: [string, string]) => {
    return (
      <div className="flex">
        <Image className="mr-2" width={20} height={20} src={logo} alt={title} />{" "}
        {title}
      </div>
    );
  },
  members: (value: string[]) => {
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
  budget: (value: number) => {
    const formatter = (n: number) => new Intl.NumberFormat().format(n);
    return <div>{value ? `$${formatter(value)}` : "Not Set"}</div>;
  },
  completion: (value: number) => (
    <div className="flex flex-col">
      <div>{value}</div>
      <Progress pct={value} />
    </div>
  ),
};

const projectsDataTable = {
  head: [
    { value: "Companies" },
    { value: "Members" },
    { value: "Budget" },
    { value: "Completion" },
  ],
  body: [
    [
      {
        key: "company",
        value: ["Chakra Soft UI", adobeXd.src],
        render: renderer.companyName,
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
        render: renderer.members,
      },
      {
        key: "budget",
        value: 14000,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 60,
        render: renderer.completion,
      },
    ],
    [
      {
        key: "company",
        value: ["Add Progress Track", atlassian.src],
        render: renderer.companyName,
      },
      {
        key: "members",
        value: [avatar1.src, avatar2.src],
        render: renderer.members,
      },
      {
        key: "budget",
        value: 3000,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 10,
        render: renderer.completion,
      },
    ],
    [
      {
        key: "company",
        value: ["Platform Errors", slack.src],
        render: renderer.companyName,
      },
      {
        key: "members",
        value: [avatar1.src, avatar2.src],
        render: renderer.members,
      },
      {
        key: "budget",
        value: 0,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 100,
        render: renderer.completion,
      },
    ],
    [
      {
        key: "company",
        value: ["Launch our Mobile App", slack.src],
        render: renderer.companyName,
      },
      {
        key: "members",
        value: [avatar1.src, avatar2.src, avatar3.src, avatar4.src],
        render: renderer.members,
      },
      {
        key: "budget",
        value: 32000,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 100,
        render: renderer.completion,
      },
    ],
    [
      {
        key: "company",
        value: ["Add the New Pricing Page", spotify.src],
        render: renderer.companyName,
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
        render: renderer.members,
      },
      {
        key: "budget",
        value: 400,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 25,
        render: renderer.completion,
      },
    ],
    [
      {
        key: "company",
        value: ["Redesign New Online Shop", invision.src],
        render: renderer.companyName,
      },
      {
        key: "members",
        value: [avatar1.src, avatar2.src, avatar3.src],
        render: renderer.members,
      },
      {
        key: "budget",
        value: 7600,
        render: renderer.budget,
      },
      {
        key: "completion",
        value: 40,
        render: renderer.completion,
      },
    ],
  ],
};

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
          head={projectsDataTable.head}
          body={projectsDataTable.body}
        />
      </Box>
      <Box className="flex-[2] flex justify-between w-full flex-col md:flex-row">
        journey
      </Box>
    </div>
  );
};

export default ProjectsInfo;
