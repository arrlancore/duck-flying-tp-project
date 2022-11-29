import Image from "next/image";
import React from "react";
import {
  adobeXd,
  atlassian,
  bell,
  cardOrange,
  cartBlue,
  checkMark,
  css3,
  invision,
  jira,
  openBox,
  slack,
  spotify,
} from "../../src/assets/icons";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "../../src/assets/images";
import Box from "../Box";
import OptionIcon from "../OptionIcon";
import Progress from "../Progress";
import Table, { Table2, THead, TRender, TRow } from "../Table";
import Text from "../Text";

type Company = {
  title: string;
  logo: string;
};
type ProjectData = {
  company: Company;
  members: string[];
  budget: number;
  completion: number;
};

const tableRenderers: TRender<ProjectData> = {
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

const tableRows: TRow<ProjectData>[] = [
  {
    company: {
      title: "Chakra Soft UI",
      logo: adobeXd.src,
    },
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src, avatar5.src],
    budget: 14000,
    completion: 60,
  },
  {
    company: {
      title: "Add Progress Track",
      logo: atlassian.src,
    },
    members: [avatar1.src, avatar2.src],
    budget: 3000,
    completion: 10,
  },
  {
    company: {
      title: "Platform Errors",
      logo: slack.src,
    },
    members: [avatar1.src, avatar2.src],
    budget: 0,
    completion: 100,
  },
  {
    company: {
      title: "Launch our Mobile App",
      logo: spotify.src,
    },
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src],
    budget: 3200,
    completion: 100,
  },
  {
    company: {
      title: "Add the New Pricing Page",
      logo: jira.src,
    },
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src, avatar5.src],
    budget: 400,
    completion: 25,
  },
  {
    company: {
      title: "Redesign New Online Shop",
      logo: invision.src,
    },
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src, avatar5.src],
    budget: 7600,
    completion: 40,
  },
];

const ordersData = [
  {
    id: "order-1",
    title: "$2400, Design changes",
    date: "2022-11-21T06:54:52.526Z",
    iconUrl: bell.src,
  },
  {
    id: "order-2",
    title: "New order $43234",
    date: "2022-11-22T06:54:52.526Z",
    iconUrl: css3.src,
  },
  {
    id: "order-3",
    title: "Server Payments for April",
    date: "2022-11-23T06:54:52.526Z",
    iconUrl: cartBlue.src,
  },
  {
    id: "order-4",
    title: "New card added for order #3210145",
    date: "2022-11-24T06:54:52.526Z",
    iconUrl: cardOrange.src,
  },
  {
    id: "order-5",
    title: "Unlock packages for Development",
    date: "2022-11-25T06:54:52.526Z",
    iconUrl: openBox.src,
  },
  {
    id: "order-6",
    title: "New order #9851258",
    date: "2022-11-26T06:54:52.526Z",
    iconUrl: adobeXd.src,
  },
];

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

          <OptionIcon />
        </div>

        <Table2
          rootStyle="mt-6"
          heads={tableHeads}
          rows={tableRows}
          renderers={tableRenderers}
        />
      </Box>
      <Box className="flex-[2] flex w-full flex-col">
        <div className="flex flex-col">
          <Text variant="head2">Orders Overview</Text>
          <Text variant="caption">
            <b className="text-green-400">+30%</b> this month
          </Text>
        </div>

        <ol className="relative border-l-2 mt-4 ml-2 border-gray-200">
          {ordersData.map((data) => (
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
