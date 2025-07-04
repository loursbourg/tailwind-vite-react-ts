import React, { FC } from "react";

type Props = {
  placeholder?: string;
  type?: "text" | "email"| "password";
};

const TextInput: FC<Props> = (props) => {
  const { placeholder, type = "text" } = props;
  return (
    <div>
      <input className="text-[14px] w-[320px] h-[56px] border-[3px] rounded-[5px] border-[#E4E4E7] ps-[14px] py-[18px]" placeholder={placeholder} type={type} />
    </div>
  );
};

export default TextInput;
