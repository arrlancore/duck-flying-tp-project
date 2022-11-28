import Image from "next/image";
import React from "react";
import {
  adobeXd,
  atlassian,
  jira,
  slack,
  spotify,
} from "../../src/assets/icons";
import Box from "../Box";
import OptionIcon from "../OptionIcon";
import Progress from "../Progress";
import Table from "../Table";

const renderer = {
  companyName: ([title, logo]: [string, string]) => {
    return (
      <div className="flex min-w-[140px]">
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
  option: () => <OptionIcon className="ml-auto" />,
};

const projectsDataTable = {
  head: [
    { value: "Companies" },
    { value: "Budget" },
    { value: "Status" },
    { value: "Completion" },
    { value: "" },
  ],
  body: [
    [
      {
        key: "company",
        value: ["Chakra Soft UI", adobeXd.src],
        render: renderer.companyName,
      },
      {
        key: "budget",
        value: 14000,
        render: renderer.budget,
      },
      {
        key: "status",
        value: "Working",
      },
      {
        key: "completion",
        value: 60,
        render: renderer.completion,
      },
      {
        key: "option",
        value: "",
        render: renderer.option,
      },
    ],
    [
      {
        key: "company",
        value: ["Add Progress Track", atlassian.src],
        render: renderer.companyName,
      },
      {
        key: "budget",
        value: 3000,
        render: renderer.budget,
      },
      {
        key: "status",
        value: "Canceled",
      },

      {
        key: "completion",
        value: 10,
        render: renderer.completion,
      },
      {
        key: "option",
        value: "",
        render: renderer.option,
      },
    ],
    [
      {
        key: "company",
        value: ["Platform Errors", slack.src],
        render: renderer.companyName,
      },
      {
        key: "budget",
        value: 0,
        render: renderer.budget,
      },
      {
        key: "status",
        value: "Done",
      },
      {
        key: "completion",
        value: 100,
        render: renderer.completion,
      },
      {
        key: "option",
        value: "",
        render: renderer.option,
      },
    ],
    [
      {
        key: "company",
        value: ["Launch our Mobile App", spotify.src],
        render: renderer.companyName,
      },
      {
        key: "budget",
        value: 32000,
        render: renderer.budget,
      },
      {
        key: "status",
        value: "Done",
      },
      {
        key: "completion",
        value: 100,
        render: renderer.completion,
      },
      {
        key: "option",
        value: "",
        render: renderer.option,
      },
    ],
    [
      {
        key: "company",
        value: ["Add the New Pricing Page", jira.src],
        render: renderer.companyName,
      },
      {
        key: "budget",
        value: 400,
        render: renderer.budget,
      },
      {
        key: "status",
        value: "Working",
      },
      {
        key: "completion",
        value: 25,
        render: renderer.completion,
      },
      {
        key: "option",
        value: "",
        render: renderer.option,
      },
    ],
  ],
};

const Projects = () => {
  return (
    <Box className="mt-4">
      <Table
        rootStyle="mt-6"
        head={projectsDataTable.head}
        body={projectsDataTable.body}
      />
    </Box>
  );
};

export default Projects;
