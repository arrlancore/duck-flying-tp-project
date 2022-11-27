import React from "react";
import { IconProps } from "../../../types";

const Document = ({ fill, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
      {...rest}
    >
      <path
        fill={fill ?? "#4FD1C5"}
        d="M12.539 7.063H8.437a1.406 1.406 0 01-1.406-1.407V1.555a.117.117 0 00-.117-.117H4.219a1.875 1.875 0 00-1.875 1.875v9.375a1.875 1.875 0 001.875 1.875h6.562a1.875 1.875 0 001.875-1.875V7.18a.117.117 0 00-.117-.117z"
      ></path>
      <path
        fill="#4FD1C5"
        d="M12.282 6.026L8.068 1.813a.059.059 0 00-.1.041v3.803a.469.469 0 00.47.469h3.802a.059.059 0 00.042-.1z"
      ></path>
    </svg>
  );
};

export default Document;
