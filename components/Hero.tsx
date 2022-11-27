import Image from "next/image";
import React from "react";
import { chakra } from "../src/assets/images";
import Box from "./Box";

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
              Built by developers
            </div>
            <div className="text-lg font-bold text-gray-700">
              Purity UI Dashboard
            </div>
            <p className="text-sm font-normal text-gray-400">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
          </div>
          <div
            className="text-[10px] font-bold
             text-gray-700 cursor-pointer"
          >{`Read More  →`}</div>
        </div>
        <Image className="mt-4 md:mt-0" alt="hero-img" {...chakra} />
      </Box>
      <Box className="flex-[2] w-full relative overflow-hidden">
        <div className={`box-border bg-hero-1 w-full h-full rounded-2xl`}>
          <div className={`w-full h-full p-4 rounded-2xl bg-hero-gradient`}>
            <div className="flex flex-col justify-between h-full">
              <div className="pr-2">
                <div className="text-lg font-bold text-white">
                  Work with the Rockets
                </div>
                <p className="text-sm font-normal text-white">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
              </div>
              <div
                className="text-[10px] font-bold
             text-white cursor-pointer"
              >{`Read More  →`}</div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Hero;
