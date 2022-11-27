import React from "react";
import { IconProps } from "../../../types";

const Chart = ({ fill, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
      {...rest}
    >
      <g fill={fill ?? "#4FD1C5"} clipPath="url(#clip0_2_94)">
        <path d="M3.047 15.032h-.938a.703.703 0 01-.703-.704V10.11a.703.703 0 01.703-.703h.938a.703.703 0 01.703.703v4.219a.703.703 0 01-.703.703zM9.61 15.03h-.938a.703.703 0 01-.703-.702V7.296a.703.703 0 01.703-.703h.937a.703.703 0 01.703.703v7.032a.703.703 0 01-.703.703zM12.89 15.031h-.937a.703.703 0 01-.703-.703V4.015a.703.703 0 01.703-.703h.937a.703.703 0 01.704.704v10.312a.703.703 0 01-.704.703zM6.328 15.031H5.39a.703.703 0 01-.703-.703V1.672A.703.703 0 015.39.969h.938a.703.703 0 01.703.703v12.656a.703.703 0 01-.703.703z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2_94">
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

export default Chart;
