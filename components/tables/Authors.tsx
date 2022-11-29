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
import Table, { THead, TRender, TRow } from "../Table";
import Image from "next/image";
import {
  author1,
  author2,
  author3,
  author4,
  author5,
  author6,
} from "../../src/assets/images";
import Text from "../Text";
import Link from "next/link";
import { formatDate } from "../../src/utils";

type UserAuthor = { name: string; email: string; pic: string };
type UserFunction = { func: string; division: string };

type AuthorData = {
  author: UserAuthor;
  function: UserFunction;
  status: string;
  employed: string;
  action?: string;
};

const tableHeads: THead[] = [
  { key: "author", title: "Author" },
  { key: "function", title: "Function" },
  { key: "status", title: "Status" },
  { key: "employed", title: "Employed" },
  { key: "action", title: "" },
];

const tableRenderers: TRender<AuthorData> = {
  author: (value) => {
    const author = value as UserAuthor;
    return (
      <div className="flex items-center">
        <Image
          className="rounded-[10px] min-w-[40px] h-[40px] object-cover"
          width="40"
          height="40"
          src={author.pic}
          alt={author.name}
        />{" "}
        <div className="flex flex-col pl-3">
          <div>{author.name}</div>
          <Text variant="caption">{author.email}</Text>
        </div>
      </div>
    );
  },
  function: (value) => {
    const role = value as UserFunction;
    return (
      <div className="flex flex-col">
        <div>{role.func}</div>
        <Text variant="caption">{role.division}</Text>
      </div>
    );
  },
  status: (value) => (
    <div>
      <span
        className={`py-2 px-4 text-white rounded-lg ${
          (value as string).toLowerCase() == "online"
            ? "bg-[#48BB78]"
            : "bg-gray-300"
        }`}
      >
        {value as string}
      </span>
    </div>
  ),
  employed: (value) => <span>{formatDate(value as string, "dd/MM/yy")}</span>,
  action: (_, obj) => (
    <Link title="Edit" href="#" className=" text-gray-500">
      Edit
    </Link>
  ),
};

const tableRows: TRow<AuthorData>[] = [
  {
    author: {
      name: "Estera Jackson",
      email: "esthera@simple.com",
      pic: author6.src,
    },
    function: { func: "Manager", division: "Organization" },
    status: "Online",
    employed: "2022-02-03T10:17:44.165Z",
  },
  {
    author: {
      name: "Alexa Liras",
      email: "alexa@simple.com",
      pic: author1.src,
    },
    function: { func: "Programmer", division: "Developer" },
    status: "Offline",
    employed: "2022-11-21T10:17:44.165Z",
  },
  {
    author: {
      name: "Laurent Michael",
      email: "laurent@simple.com",
      pic: author2.src,
    },
    function: { func: "Executive", division: "Project" },
    status: "Online",
    employed: "2022-01-05T10:17:44.165Z",
  },
  {
    author: {
      name: "Freduardo Hill",
      email: "fred@simple.com",
      pic: author3.src,
    },
    function: { func: "Programmer", division: "Developer" },
    status: "Online",
    employed: "2022-06-21T10:17:44.165Z",
  },
  {
    author: {
      name: "Daniel Thomas",
      email: "daniel@simple.com",
      pic: author4.src,
    },
    function: { func: "Programmer", division: "Developer" },
    status: "Offline",
    employed: "2022-04-04T10:17:44.165Z",
  },
  {
    author: {
      name: "Mark Wilson",
      email: "mark@simple.com",
      pic: author5.src,
    },
    function: { func: "Designer", division: "UI/UX Design" },
    status: "Offline",
    employed: "2022-11-03T10:17:44.165Z",
  },
];

const Authors = () => {
  return (
    <Box className="font-normal">
      <Table heads={tableHeads} rows={tableRows} renderers={tableRenderers} />
    </Box>
  );
};

export default Authors;
