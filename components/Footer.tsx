import Link from "next/link";
import React from "react";
import Text from "./Text";

const Footer = () => {
  return (
    <div className="flex justify-between mt-auto pt-6 py-4 flex-col md:flex-row">
      <div className="w-full flex-1">
        <Text variant="caption" className="text-xs">
          @ {new Date().getFullYear()}, Made with ❤️ by{" "}
          <span className="text-secondary">Creative Tim</span> &{" "}
          <span className="text-secondary">Simmmple</span> for a better web
        </Text>
      </div>
      <div
        className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 
        md:gap-8 pt-8 md:pt-0 text-left md:text-right items-center"
      >
        <Text variant="caption" className="text-xs">
          <Link href="#">Creative Tim</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">Simmmple</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">Blog</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">License</Link>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
