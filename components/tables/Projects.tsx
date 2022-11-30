import Image from "next/image";
import React from "react";
import {
  Company,
  ProjectDataTable,
  tableRowsProjectTable,
} from "../../src/mocks";
import Box from "../Box";
import OptionIcon from "../OptionIcon";
import Progress from "../Progress";
import Table, { THead, TRender } from "../Table";

const tableRenderers: TRender<ProjectDataTable> = {
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
    return <div>{value ? `$${formatter(value as number)}` : "Not Set"}</div>;
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

const Projects = () => {
  return (
    <Box className="mt-4">
      <Table
        rootStyle="mt-6"
        heads={tableHeads}
        rows={tableRowsProjectTable}
        renderers={tableRenderers}
      />
    </Box>
  );
};

export default Projects;
