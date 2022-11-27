import React from "react";
import { IconProps } from "../../../types";

const Card = ({ fill, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
      {...rest}
    >
      <g fill={fill ?? "#4FD1C5"} clipPath="url(#clip0_2_100)">
        <path d="M.937 11.515a1.64 1.64 0 001.64 1.64h9.845a1.641 1.641 0 001.64-1.64V7.004H.937v4.511zM2.871 9.29a.879.879 0 01.879-.88h1.406a.879.879 0 01.879.88v.586a.879.879 0 01-.879.879H3.75a.879.879 0 01-.88-.88V9.29zM12.422 2.843H2.578a1.64 1.64 0 00-1.64 1.64v.762h13.124v-.761a1.64 1.64 0 00-1.64-1.641z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2_100">
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

export default Card;
