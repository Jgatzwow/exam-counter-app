import React from "react";

type PropsType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SuperButton = (props: PropsType) => {
  const { children, className, ...restProps } = props;
  return (
    <button className={`default__btn ${className}`} {...restProps}>
      {children}
    </button>
  );
};
