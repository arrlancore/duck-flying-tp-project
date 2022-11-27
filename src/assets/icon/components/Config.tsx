import React from "react";
import { IconProps } from "../../../types";

const Config = ({ fill, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
      {...rest}
    >
      <g clipPath="url(#clip0_2_106)">
        <path
          fill={fill ?? "#4FD1C5"}
          d="M13.756 4.031a.468.468 0 00-.748-.117l-1.8 1.801a.472.472 0 01-.663 0l-.778-.779a.469.469 0 010-.663l1.792-1.793a.468.468 0 00-.14-.759c-1.354-.605-3.043-.29-4.109.768-.905.9-1.175 2.304-.74 3.854a.465.465 0 01-.131.468L1.56 11.266a1.88 1.88 0 102.655 2.655l4.502-4.888A.466.466 0 019.18 8.9c.441.121.897.184 1.354.187.979 0 1.837-.317 2.457-.927 1.147-1.13 1.322-3.047.765-4.128zm-10.841 9.57a.937.937 0 11-.203-1.864.937.937 0 01.203 1.864z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2_106">
          <path
            fill="#fff"
            d="M0 0H15V15H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Config;
