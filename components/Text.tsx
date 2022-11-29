import React, { HTMLAttributes } from "react";

type TextVariant = "head1" | "head2" | "caption";

type Props = HTMLAttributes<HTMLElement> & { variant?: TextVariant };

const Text = ({ variant, ...rest }: Props) => {
  if (variant == "head1") {
    return (
      <div
        className={`my-1 font-bold text-sm
       text-gray-700 ${rest.className ?? ""}`}
      >
        {rest.children}
      </div>
    );
  }
  if (variant == "head2") {
    return (
      <div
        className={`font-bold text-lg text-gray-700
         ${rest.className ?? ""}`}
      >
        {rest.children}
      </div>
    );
  }
  if (variant == "caption") {
    return (
      <span
        className={`text-sm text-gray-400
         ${rest.className ?? ""}`}
      >
        {rest.children}
      </span>
    );
  }
  return (
    <p
      className={`text-sm text-gray-400
  ${rest.className ?? ""}`}
    >
      {rest.children}
    </p>
  );
};

export default Text;
