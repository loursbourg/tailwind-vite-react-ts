import React, { FC, ReactElement } from "react";

type Props = {
  onClick?: () => void;
  children?: ReactElement | string;
};

const Button: FC<Props> = (props) => {
  const { onClick = () => {}, children } = props;
  return (
    <div>
      <button className="bg-[#6E25BA] px-[16px] py-[10px] rounded-md text-[#fff]" onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
