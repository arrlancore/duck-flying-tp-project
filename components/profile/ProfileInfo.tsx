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

const ProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Box className="flex-[1]">
        <Text variant="head2">Platform Settings</Text>
        <Text
          variant="caption"
          className="block text-[10px] mt-2 font-bold uppercase"
        >
          Account
        </Text>
        <Toggle
          className="mt-4 mb-2"
          defaultChecked={true}
          label="Email me when someone follows me"
        />
        <Toggle
          className="my-2"
          defaultChecked={false}
          label="Email me when someone answers on my post"
        />
        <Toggle
          className="my-2"
          defaultChecked={true}
          label="Email me when someone mentions me"
        />

        <Text
          variant="caption"
          className="block text-[10px] mt-4 font-bold uppercase"
        >
          Application
        </Text>
        <Toggle
          className="mt-4 mb-2"
          defaultChecked={true}
          label="New launches and projects"
        />
        <Toggle
          className="my-2"
          defaultChecked={false}
          label="Monthly product updates"
        />
        <Toggle
          className="my-2"
          defaultChecked={true}
          label="Subscribe to newsletter"
        />
      </Box>

      <Box className="flex-[1] ml-0 md:ml-4 mt-4 md:mt-0">
        <Text variant="head2">Profile Information</Text>
        <Text className="mt-4">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </Text>
        <GradientLine className="my-4" />
        <Text variant="caption" className="block my-4">
          <b>Full Name:</b> Alec M. Thompson
        </Text>
        <Text variant="caption" className="block my-4">
          <b>Mobile:</b> (44) 123 123 123
        </Text>
        <Text variant="caption" className="block my-4">
          <b>Email:</b> alecm@simple.com
        </Text>
        <Text variant="caption" className="block my-4">
          <b>Location:</b> United States
        </Text>
        <Text variant="caption" className="flex items-center my-4">
          <b>Social Media:</b>{" "}
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
        <Text variant="head2">Conversations</Text>
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
              Reply
            </Link>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default ProfileInfo;
