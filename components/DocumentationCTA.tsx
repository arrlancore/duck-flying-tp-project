import Image from "next/image";
import React from "react";
import { help } from "../src/assets/icons";
import { lineRadarBg } from "../src/assets/images";
import Box from "./Box";

const DocumentationCTA = () => {
  return (
    <Box
      className="hidden md:flex shadow-none bg-secondary
     flex-col items-start relative"
    >
      <Image
        className="absolute right-0 bottom-0
         z-0 scale-[1.2]"
        alt="radar-bg"
        {...lineRadarBg}
      />
      <Box className="w-auto inline-flex p-2 rounded-lg">
        <Image alt="help" {...help} />
      </Box>

      <h4
        className="text-white mt-6
      font-bold text-[14px]"
      >
        Need Help?
      </h4>
      <p className="text-white text-[14px]">Please check our docs</p>
      <Box
        className="flex items-center
        justify-center mt-2 cursor-pointer"
      >
        <span
          className="text-4 text-[10px]
        leading-[15px] font-bold text-gray-700"
        >
          DOCUMENTATION
        </span>
      </Box>
    </Box>
  );
};

export default DocumentationCTA;
