import Image from "next/image";
import React from "react";
import { checkMark } from "../../src/assets/icons";
import {
  Company,
  ordersDataDashboard,
  ProjectDataDashboard,
  tableRowsProjectDashboard,
} from "../../src/mocks";
import Box from "../Box";
import OptionIcon from "../OptionIcon";
import Progress from "../Progress";
import Table, { THead, TRender } from "../Table";
import Text from "../Text";

const tableRenderers: TRender<ProjectDataDashboard> = {
  company: (company) => {
    return (
      <div className="flex min-w-[140px]">
        <Image
          className="mr-2"
          width={20}
          height={20}
          src={(company as Company).logo}
          alt={(company as Company).title}
        />{" "}
        {(company as Company).title}
      </div>
    );
  },
  members: (value) => {
    return (
      <div className="flex relative">
        {(value as string[]).map((src, idx) => (
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
};

const tableHeads: THead[] = [
  { key: "company", title: "Companies" },
  { key: "members", title: "Members" },
  { key: "budget", title: "Budget" },
  { key: "completion", title: "Completion" },
];

const caption = {
  projects: "Projects",
  projectsDescPref: "30 done",
  projectsDescPost: "this month",

  orders: "Orders Overview",
  ordersDescPref: "+30%",
  ordersDescPost: "this month",
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
            <Text variant="head2">{caption.projects}</Text>
            <div className="flex">
              <Image className="mr-1" alt="check-mark" {...checkMark} />
              <Text variant="caption">
                <b>{caption.projectsDescPref}</b> {caption.projectsDescPost}
              </Text>
            </div>
          </div>

          <OptionIcon />
        </div>

        <Table
          rootStyle="mt-6"
          heads={tableHeads}
          rows={tableRowsProjectDashboard}
          renderers={tableRenderers}
        />
      </Box>
      <Box className="flex-[2] flex w-full flex-col">
        <div className="flex flex-col">
          <Text variant="head2">{caption.orders}</Text>
          <Text variant="caption">
            <b className="text-green-400">{caption.ordersDescPref}</b>{" "}
            {caption.ordersDescPost}
          </Text>
        </div>

        <ol className="relative border-l-2 mt-4 ml-2 border-gray-200">
          {ordersDataDashboard.map((data) => (
            <li className="mb-4 ml-4" key={data.id}>
              <div
                className="absolute w-8 h-8 bg-white 
              flex justify-center rounded-full -left-4
              -mt-[6px] border border-white"
              >
                <Image alt="icon" src={data.iconUrl} width="16" height="30" />
              </div>
              <Text variant="head1">{data.title}</Text>
              <Text className="text-bold">
                <time>{new Date(data.date).toLocaleString()}</time>
              </Text>
            </li>
          ))}
        </ol>
      </Box>
    </div>
  );
};

export default ProjectsInfo;
