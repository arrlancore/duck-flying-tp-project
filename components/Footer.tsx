import Link from "next/link";
import React from "react";
import Text from "./Text";

const caption = {
  copyrightPref: `@ ${new Date().getFullYear()}, Made with ❤️ by`,
  copyrightPost: "for a better web",
  team1: "Creative Tim",
  team2: "Simmmple",
  blog: "Blog",
  license: "License",
};

const Footer = () => {
  return (
    <div className="flex justify-between mt-auto pt-6 py-4 flex-col md:flex-row">
      <div className="w-full flex-1">
        <Text variant="caption" className="text-xs">
          {caption.copyrightPref}{" "}
          <span className="text-secondary">{caption.team1}</span> &{" "}
          <span className="text-secondary">{caption.team2}</span>{" "}
          {caption.copyrightPost}
        </Text>
      </div>
      <div
        className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 
        md:gap-8 pt-8 md:pt-0 text-left md:text-right items-center"
      >
        <Text variant="caption" className="text-xs">
          <Link href="#">{caption.team1}</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">{caption.team2}</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">{caption.blog}</Link>
        </Text>
        <Text variant="caption" className="text-xs">
          <Link href="#">{caption.license}</Link>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
