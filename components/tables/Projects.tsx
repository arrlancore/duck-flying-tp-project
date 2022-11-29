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
import Table, { THead, TRender } from "../Table";

type Company = {
  title: string;
  logo: string;
};
type ProjectData = {
  company: Company;
  budget: number;
  status: string;
  completion: number;
  option?: string;
};

const tableRenderers: TRender<ProjectData> = {
  company: (value) => {
    const company = value as Company;
    return (
      <div className="flex min-w-[140px]">
        <Image
          className="mr-2"
          width={20}
          height={20}
          src={company.logo}
          alt={company.title}
        />{" "}
        {company.title}
      </div>
    );
  },
  budget: (value) => {
    const formatter = (n: number) => new Intl.NumberFormat().format(n);
    return <div>{!!value ? `$${formatter(value as number)}` : "Not Set"}</div>;
  },
  completion: (value) => (
    <div className="flex flex-col">
      <div>{value as number}</div>
      <Progress pct={value as number} />
    </div>
  ),
  option: () => <OptionIcon className="ml-auto" />,
};

const tableHeads: THead[] = [
  { key: "company", title: "Companies" },
  { key: "budget", title: "Budget" },
  { key: "status", title: "Status" },
  { key: "completion", title: "Completion" },
  { key: "option", title: "" },
];

const tableRows: ProjectData[] = [
  {
    company: { title: "Chakra Soft UI", logo: adobeXd.src },
    budget: 14000,
    status: "Working",
    completion: 60,
  },
  {
    company: { title: "Add Progress Track", logo: atlassian.src },
    budget: 3000,
    status: "Canceled",
    completion: 10,
  },
  {
    company: {
      title: "Platform Errors",
      logo: slack.src,
    },
    budget: 0,
    status: "Done",
    completion: 100,
  },
  {
    company: {
      title: "Launch our Mobile App",
      logo: spotify.src,
    },
    budget: 3200,
    status: "Done",
    completion: 100,
  },
  {
    company: {
      title: "Add the New Pricing Page",
      logo: jira.src,
    },
    budget: 400,
    status: "Working",
    completion: 25,
  },
];

const Projects = () => {
  return (
    <Box className="mt-4">
      <Table
        rootStyle="mt-6"
        heads={tableHeads}
        rows={tableRows}
        renderers={tableRenderers}
      />
    </Box>
  );
};

export default Projects;
