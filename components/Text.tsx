import React, { HTMLAttributes } from "react";

type TextVariant = "head1" | "head2" | "caption";

type Props = HTMLAttributes<HTMLElement> & { variant?: TextVariant };

const Text = ({ variant, ...rest }: Props) => {
  let className = "";
  let Elm = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <div {...props}>{children}</div>
  );
  switch (variant) {
    case "head1":
      className = "my-1 font-bold text-sm text-gray-700";
      break;
    case "head2":
      className = "font-bold text-lg text-gray-700";
      break;
    case "caption":
      className = "font-normal text-sm text-gray-400";
      // eslint-disable-next-line react/display-name
      Elm = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
        <span {...props}>{children}</span>
      );
      break;
    default:
      className = "text-sm font-normal text-gray-400";
      // eslint-disable-next-line react/display-name
      Elm = ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
        <p {...props}>{children}</p>
      );
      break;
  }

  className = !!rest.className ? `${className} ${rest.className}` : className;

  return (
    <Elm className={className} {...rest}>
      {rest.children}
    </Elm>
  );
};

export default Text;
