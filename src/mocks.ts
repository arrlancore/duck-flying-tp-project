import { TRow } from "../components/Table";
import {
  profilePict,
  profilePict2,
  profilePict3,
  profilePict4,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  project1,
  project2,
  project3,
  author1,
  author2,
  author3,
  author4,
  author5,
  author6,
} from "./assets/images";
import { adobeXd, atlassian, jira, slack, spotify } from "./assets/icons";

// billing screen
export const invoicesDataPayment = [
  {
    id: "MS-415641",
    date: "2022-11-29T02:43:14.577Z",
    amount: 240,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415642",
    date: "2022-04-01T02:43:14.577Z",
    amount: 180,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415643",
    date: "2022-05-06T02:43:14.577Z",
    amount: 120,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415644",
    date: "2021-02-02T02:43:14.577Z",
    amount: 300,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
  {
    id: "MS-415645",
    date: "2022-01-01T02:43:14.577Z",
    amount: 560,
    fileUrl:
      "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
  },
];

export const transactionNewDataBilling = [
  {
    id: "transaction-1",
    purpose: "Netflix",
    date: "2022-11-29T02:43:14.577Z",
    amount: 1000,
    statuses: "in",
  },
  {
    id: "transaction-2",
    purpose: "Apple",
    date: "2022-11-28T02:43:14.577Z",
    amount: 1000,
    statuses: "out",
  },
];

export const transactionYesterdayDataBilling = [
  {
    id: "transaction-3",
    purpose: "Stripe",
    date: "2022-11-29T02:43:14.577Z",
    amount: 540,
    statuses: "in",
  },
  {
    id: "transaction-4",
    purpose: "HubSpot",
    date: "2022-11-28T02:43:14.577Z",
    amount: 200,
    statuses: "out",
  },
  {
    id: "transaction-5",
    purpose: "WebFlow",
    date: "2022-11-26T02:43:14.577Z",
    amount: 1000,
    statuses: "pending",
  },
  {
    id: "transaction-6",
    purpose: "Microsoft",
    date: "2022-11-25T02:43:14.577Z",
    amount: 190,
    statuses: "out",
  },
];

export const infoDataBilling = [
  {
    id: "bill-info-1",
    name: "Oliver Liam",
    companyName: "Viking Burrito",
    emailAddress: "oliver@burrito.com",
    vatNumber: "FRB123456",
  },
  {
    id: "bill-info-2",
    name: "Alexa Liam",
    companyName: "Viking Burrito",
    emailAddress: "alexa@burrito.com",
    vatNumber: "FRB123457",
  },
  {
    id: "bill-info-3",
    name: "Juan Liam",
    companyName: "Viking Burrito",
    emailAddress: "juan@burrito.com",
    vatNumber: "FRB123458",
  },
];

// Profile screen

export const conversationsDataProfile = [
  {
    id: "conversation-1",
    name: "Esthera Jackson",
    message: "Hi! I need more informations...",
    profilePictureUrl: profilePict.src,
  },
  {
    id: "conversation-2",
    name: "Esthera Jackson 2",
    message: "Awesome work, can you change...",
    profilePictureUrl: profilePict2.src,
  },
  {
    id: "conversation-3",
    name: "Esthera Jackson 3",
    message: "Have a great afternoon...",
    profilePictureUrl: profilePict3.src,
  },
  {
    id: "conversation-4",
    name: "Esthera Jackson 4",
    message: "About files I can...",
    profilePictureUrl: profilePict4.src,
  },
];

export const projectsDataProfile = [
  {
    id: "Project #1",
    projectName: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    img: project1.src,
    members: [avatar5.src, avatar2.src, avatar3.src, avatar4.src],
  },
  {
    id: "Project #2",
    projectName: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    img: project2.src,
    members: [avatar5.src, avatar2.src, avatar3.src, avatar4.src],
  },
  {
    id: "Project #3",
    projectName: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    img: project3.src,
    members: [avatar5.src, avatar2.src, avatar3.src, avatar4.src],
  },
];

// table screen
export type UserAuthor = { name: string; email: string; pic: string };
export type UserFunction = { func: string; division: string };

export type AuthorData = {
  author: UserAuthor;
  function: UserFunction;
  status: string;
  employed: string;
  action?: string;
};

export const tableRowsAuthorTable: TRow<AuthorData>[] = [
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

export type Company = {
  title: string;
  logo: string;
};
export type ProjectData = {
  company: Company;
  budget: number;
  status: string;
  completion: number;
  option?: string;
};
export const tableRowsProjectTable: ProjectData[] = [
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
