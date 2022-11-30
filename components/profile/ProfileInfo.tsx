import Image from "next/image";
import Link from "next/link";
import React from "react";
import { facebook, instagram, twitter } from "../../src/assets/icons";
import {
  profilePict,
  profilePict2,
  profilePict3,
  profilePict4,
} from "../../src/assets/images";
import Box from "../Box";
import GradientLine from "../GradientLine";
import { SpaceY } from "../Space";
import Text from "../Text";
import Toggle from "../Toggle";

const conversationsData = [
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

const caption = {
  platformSettings: "Platform Settings",
  account: "Account",
  accountConf1: "Email me when someone follows me",
  accountConf2: "Email me when someone answers on my post",
  accountConf3: "Email me when someone mentions me",
  application: "Application",
  applicationConf1: "New launches and projects",
  applicationConf2: "Monthly product updates",
  applicationConf3: "Subscribe to newsletter",

  profileInformation: "Profile Information",
  profileBio: `Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
  no. If two equally difficult paths, choose the one more painful in the
  short term (pain avoidance is creating an illusion of equality).`,
  name: "Full Name",
  profileName: "Alec M. Thompson",
  mobile: "Mobile",
  profileMobile: "(44) 123 123 123",
  email: "Email",
  profileEmail: "alecm@simple.com",
  location: "Location",
  profileLocation: "United States",
  socialMedia: "Social Media",

  conversation: "Conversations",
  reply: "Reply",
};

const ProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Box className="flex-[1]">
        <Text variant="head2">{caption.platformSettings}</Text>
        <Text
          variant="caption"
          className="block text-[10px] mt-2 font-bold uppercase"
        >
          {caption.account}
        </Text>
        <Toggle
          className="mt-4 mb-2"
          defaultChecked={true}
          label={caption.accountConf1}
        />
        <Toggle
          className="my-2"
          defaultChecked={false}
          label={caption.accountConf2}
        />
        <Toggle
          className="my-2"
          defaultChecked={true}
          label={caption.accountConf3}
        />

        <Text
          variant="caption"
          className="block text-[10px] mt-4 font-bold uppercase"
        >
          {caption.application}
        </Text>
        <Toggle
          className="mt-4 mb-2"
          defaultChecked={true}
          label={caption.applicationConf1}
        />
        <Toggle
          className="my-2"
          defaultChecked={false}
          label={caption.applicationConf2}
        />
        <Toggle
          className="my-2"
          defaultChecked={true}
          label={caption.applicationConf3}
        />
      </Box>

      <Box className="flex-[1] ml-0 md:ml-4 mt-4 md:mt-0">
        <Text variant="head2">{caption.profileInformation}</Text>
        <Text className="mt-4">{caption.profileBio}</Text>
        <GradientLine className="my-4" />
        <Text variant="caption" className="block my-4">
          <b>{caption.name}:</b> {caption.profileName}
        </Text>
        <Text variant="caption" className="block my-4">
          <b>{caption.mobile}:</b> {caption.profileMobile}
        </Text>
        <Text variant="caption" className="block my-4">
          <b>{caption.email}:</b> {caption.profileEmail}
        </Text>
        <Text variant="caption" className="block my-4">
          <b>{caption.location}:</b> {caption.profileLocation}
        </Text>
        <Text variant="caption" className="flex items-center my-4">
          <b>{caption.socialMedia}:</b>{" "}
          <Link href="#">
            <Image {...facebook} alt="facebook" className="ml-4"></Image>
          </Link>
          <Link href="#">
            <Image {...twitter} alt="twitter" className="ml-4"></Image>
          </Link>
          <Link href="#">
            <Image {...instagram} alt="instagram" className="ml-4"></Image>
          </Link>
        </Text>
      </Box>

      <Box className="flex-[1] ml-0 md:ml-4 mt-4 md:mt-0">
        <Text variant="head2">{caption.conversation}</Text>
        <SpaceY />
        {conversationsData.map(({ id, name, message, profilePictureUrl }) => (
          <div key={id} className="flex justify-between items-center">
            <div className="flex flex-[1] items-center mb-4">
              <Image
                className="rounded-xl w-[50px] h-[50px] object-contain"
                width={50}
                height={50}
                src={profilePictureUrl}
                alt={"chat"}
              />{" "}
              <div className="flex flex-col pl-3">
                <Text variant="head1" className="m-[0]">
                  {name}
                </Text>
                <Text variant="caption">{message}</Text>
              </div>
            </div>
            <Link
              href="#"
              className="text-secondary uppercase text-[10px] font-bold"
            >
              {caption.reply}
            </Link>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default ProfileInfo;
