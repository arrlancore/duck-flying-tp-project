import React from "react";
import { IconProps } from "../../../types";

const Dashboard = ({ fill, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
      {...rest}
    >
      <g fill={fill ?? "#4FD1C5"} clipPath="url(#clip0_2_78)">
        <path d="M7.663 3.468a.234.234 0 00-.324 0L1.945 8.62a.234.234 0 00-.072.17l-.001 4.835a.938.938 0 00.937.938h2.816a.469.469 0 00.468-.469V10.11a.234.234 0 01.235-.235h2.344a.234.234 0 01.234.235v3.984a.469.469 0 00.469.469h2.814a.937.937 0 00.938-.938V8.79a.234.234 0 00-.073-.17L7.663 3.468z"></path>
        <path d="M14.382 7.654l-2.191-2.097V2.376a.469.469 0 00-.469-.469h-1.406a.469.469 0 00-.469.469v.937L8.15 1.691a.912.912 0 00-.65-.253.91.91 0 00-.649.253L.62 7.653a.478.478 0 00-.04.656.469.469 0 00.68.03l6.079-5.808a.234.234 0 01.324 0l6.08 5.809a.469.469 0 00.661-.013.48.48 0 00-.022-.673z"></path>
      </g>
      <defs>
        <clipPath id="clip0_2_78">
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

export default Dashboard;
