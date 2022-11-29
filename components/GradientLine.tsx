import Image from "next/image";
import React from "react";
import { defaultGradientLine } from "../src/assets/icons";

const GradientLine = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="gradient-line"
      {...defaultGradientLine}
      className={`py-2 w-full ${className}`}
    />
  );
};

export default GradientLine;
