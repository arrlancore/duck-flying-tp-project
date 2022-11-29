import Image from "next/image";
import React from "react";
import { chakra } from "../../src/assets/images";
import Box from "../Box";
import Text from "../Text";

const caption = {
  buildBy: "Built by developers",
  hero1title: "Purity UI Dashboard",
  hero1desc:
    "From colors, cards, typography to complex elements, you will find the full documentation.",
  readMore: "Read More  →",
  hero2title: "Work with the Rockets",
  hero2desc:
    "Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.",
};

const Hero = () => {
  return (
    <div
      className="flex space-y-4 sm:space-y-0 space-x-0 
      sm:space-x-4 pt-4 flex-col sm:flex-row"
    >
      <Box className="flex-[3] flex justify-between w-full flex-col md:flex-row">
        <div className="flex flex-col justify-between">
          <div className="pr-2">
            <div className="text-xs font-bold text-gray-400">
              {caption.buildBy}
            </div>
            <div className="text-lg font-bold text-gray-700">
              {caption.hero1title}
            </div>
            <Text>{caption.hero1desc}</Text>
          </div>
          <div
            className="text-[10px] font-bold
             text-gray-700 cursor-pointer"
          >
            {caption.readMore}
          </div>
        </div>
        <Image className="mt-4 md:mt-0" alt="hero-img" {...chakra} />
      </Box>
      <Box className="flex-[2] w-full relative overflow-hidden">
        <div className={`box-border bg-hero-1 w-full h-full rounded-2xl`}>
          <div className={`w-full h-full p-4 rounded-2xl bg-hero-gradient`}>
            <div className="flex flex-col justify-between h-full">
              <div className="pr-2">
                <div className="text-lg font-bold text-white">
                  {caption.hero2title}
                </div>
                <Text>{caption.hero2desc}</Text>
              </div>
              <div
                className="text-[10px] font-bold
             text-white cursor-pointer"
              >
                {caption.readMore}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Hero;
