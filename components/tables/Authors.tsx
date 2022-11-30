import React from "react";
import Box from "../Box";
import Table, { THead, TRender, TRow } from "../Table";
import Image from "next/image";
import Text from "../Text";
import Link from "next/link";
import { formatDate } from "../../src/utils";
import {
  AuthorData,
  tableRowsAuthorTable,
  UserAuthor,
  UserFunction,
} from "../../src/mocks";

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
  action: () => (
    <Link title="Edit" href="#" className=" text-gray-500">
      Edit
    </Link>
  ),
};

const Authors = () => {
  return (
    <Box className="font-normal">
      <Table
        heads={tableHeads}
        rows={tableRowsAuthorTable}
        renderers={tableRenderers}
      />
    </Box>
  );
};

export default Authors;
