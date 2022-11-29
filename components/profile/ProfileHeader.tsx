import Image from "next/image";
import React from "react";
import {
  editGreen,
  overview,
  projectsConfig,
  teams,
} from "../../src/assets/icons";
import { profilePict } from "../../src/assets/images";
import Box from "../Box";
import Text from "../Text";

const ProfileHeader = () => {
  return (
    <div className="w-full z-10 mt-[60px] sm:mt-[132px]">
      <Box className="w-[96%] mx-auto bg-white/80">
        <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
          <div className="flex items-center">
            <div className="relative">
              <Image
                alt="profile"
                {...profilePict}
                width={80}
                height={80}
                className="w-[80px] h-[80px] rounded-2xl object-contain"
              />
              <div
                title="edit"
                className="bg-white p-2 rounded-lg absolute
               -right-1 -bottom-1 shadow-sm cursor-pointer"
              >
                <Image alt="edit" {...editGreen} />
              </div>
            </div>
            <div className="flex flex-col ml-4">
              <Text variant="head2">Esthera Jackson</Text>
              <Text variant="caption">esthera@simple.com</Text>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0">
            {/* active button */}
            <button
              className="flex items-center px-8 py-3 uppercase text-xs
             font-bold text-gray-700 bg-white shadow-md rounded-xl"
            >
              <Image alt="overview" className="mr-1" {...overview} />
              overview
            </button>
            <button
              className="flex items-center px-4 py-2 uppercase text-xs
             font-bold text-gray-700 ml-4"
            >
              <Image alt="overview" className="mr-1" {...teams} />
              teams
            </button>
            <button
              className="flex items-center px-4 py-2 uppercase text-xs
             font-bold text-gray-700 ml-4"
            >
              <Image alt="overview" className="mr-1" {...projectsConfig} />
              project
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ProfileHeader;
