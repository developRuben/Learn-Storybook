import React, { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  style?: {};
  variant: "success" | "error" | "info";
}

const Button = ({
  text = "click default",
  variant = "info",
  style = {},
  ...props
}: Props) => {
  return (
    <>
      {(variant === "info" || variant === undefined) && (
        <button
          {...props}
          style={{ ...style, border: "1px solid blue", color: "blue" }}
        >
          {text}
        </button>
      )}
      {variant === "success" && (
        <button
          {...props}
          style={{ ...style, border: "1px solid green", color: "green" }}
        >
          {text}
        </button>
      )}
      {variant === "error" && (
        <button
          {...props}
          style={{ ...style, border: "1px solid red", color: "red" }}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
