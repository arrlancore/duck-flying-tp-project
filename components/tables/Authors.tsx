import React from "react";
import Box from "../Box";
import {
  adobeXd,
  atlassian,
  jira,
  slack,
  spotify,
} from "../../src/assets/icons";
import OptionIcon from "../OptionIcon";
import Progress from "../Progress";
import Table from "../Table";
import Image from "next/image";
import {
  author1,
  author2,
  author3,
  author4,
  author6,
} from "../../src/assets/images";
import Text from "../Text";
import Link from "next/link";

const renderer = {
  author: ([name, email, pic]: [string, string, string]) => {
    return (
      <div className="flex items-center">
        <Image
          className="rounded-2xl object-contain"
          width="40"
          height="40"
          src={pic}
          alt={name}
        />{" "}
        <div className="flex flex-col pl-3">
          <div>{name}</div>
          <Text variant="caption">{email}</Text>
        </div>
      </div>
    );
  },
  function: ([func, division]: [string, string]) => {
    return (
      <div className="flex flex-col">
        <div>{func}</div>
        <Text variant="caption">{division}</Text>
      </div>
    );
  },
  status: (statuses: string) => (
    <div>
      <span
        className={`py-2 px-4 text-white rounded-lg ${
          statuses.toLowerCase() == "online" ? "bg-[#48BB78]" : "bg-gray-300"
        }`}
      >
        {statuses}
      </span>
    </div>
  ),
  employed: (date: string) => (
    <span>{new Date(date).toLocaleDateString()}</span>
  ),
  action: () => (
    <Link title="Edit" href="#" className=" text-gray-500">
      Edit
    </Link>
  ),
};

const projectsDataTable = {
  head: [
    { value: "Author" },
    { value: "Function" },
    { value: "Status" },
    { value: "Employed" },
    { value: "" },
  ],
  body: [
    [
      {
        key: "author",
        value: ["Esthera Jackson", "esthera@simple.com", author6.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Manager", "Organization"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Online",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-28T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
    [
      {
        key: "author",
        value: ["Alexa Liras", "alexa@simple.com", author1.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Programmer", "Developer"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Offline",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-21T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
    [
      {
        key: "author",
        value: ["Laurent Michael", "laurent@simple.com", author2.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Executive", "Project"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Online",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-23T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
    [
      {
        key: "author",
        value: ["Freduardo Hill", "hill@simple.com", author3.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Manager", "Organization"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Online",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-24T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
    [
      {
        key: "author",
        value: ["Daniel Thomas", "daniel@simple.com", author4.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Programmer", "Developer"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Offline",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-26T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
    [
      {
        key: "author",
        value: ["Mark Wilson", "mark@simple.com", author1.src],
        render: renderer.author,
      },
      {
        key: "function",
        value: ["Designer", "UI/UX Design"],
        render: renderer.function,
      },
      {
        key: "status",
        value: "Offline",
        render: renderer.status,
      },
      {
        key: "employed",
        value: "2022-11-27T10:17:44.165Z",
        render: renderer.employed,
      },
      {
        key: "action",
        value: "",
        render: renderer.action,
      },
    ],
  ],
};

const Authors = () => {
  return (
    <Box>
      <Table head={projectsDataTable.head} body={projectsDataTable.body} />
    </Box>
  );
};

export default Authors;
