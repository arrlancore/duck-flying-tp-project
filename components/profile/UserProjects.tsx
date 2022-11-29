import React from "react";
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
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div className="">4</div>
      </div>
    </Box>
  );
};

export default UserProjects;
