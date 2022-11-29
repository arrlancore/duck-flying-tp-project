import Image from "next/image";
import React from "react";
import { add } from "../../src/assets/icons";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  project1,
  project2,
  project3,
} from "../../src/assets/images";
import Box from "../Box";
import { SpaceY } from "../Space";
import Text from "../Text";

const projectsData = [
  {
    id: "Project #1",
    projectName: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    img: project1.src,
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src],
  },
  {
    id: "Project #2",
    projectName: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    img: project2.src,
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src],
  },
  {
    id: "Project #3",
    projectName: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    img: project3.src,
    members: [avatar1.src, avatar2.src, avatar3.src, avatar4.src],
  },
];

const UserProjects = () => {
  return (
    <Box>
      <Text variant="head2">Projects</Text>
      <Text variant="caption">Architects design houses</Text>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {projectsData.map(({ id, projectName, description, img, members }) => (
          <div key={id} className="flex flex-col mt-2">
            <div className="block relative my-2">
              <Image
                alt="project"
                src={img}
                width="256"
                height="256"
                className="rounded-xl w-full"
              />
              <div className="absolute left-0 top-0 w-full h-full bg-projects-overlay" />
            </div>

            <Text variant="caption" className="text-[10px]">
              {id}
            </Text>
            <Text variant="head2">{projectName}</Text>
            <Text variant="caption">{description}</Text>
            <div className="flex justify-between items-center mt-auto pt-4">
              <button
                className="py-2 px-6 border-solid font-bold
            rounded-2xl border-2 border-secondary
            text-xs text-secondary hover:opacity-80
            hover:shadow-md"
              >
                VIEW ALL
              </button>
              <div className="flex relative left-[8px]">
                {members.map((src, idx) => (
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
            </div>
          </div>
        ))}

        <div
          className="flex items-center justify-center
         w-full h-auto rounded-xl border-solid border-[1px]
          border-gray-200 mt-4 cursor-pointer min-h-[180px]"
        >
          <div className="flex flex-col items-center">
            <Image alt="add" {...add} />
            <Text variant="head2" className="mt-2 text-[#718096]">
              Create a New Project
            </Text>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UserProjects;
