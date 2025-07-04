import React, { FC, Fragment } from "react";
import { Label } from "../../components/label";
import { TextInput } from "../../components/text-input";

const InputFieldsSection: FC = () => {
  return (
    <Fragment>
      <Label title="1) Add inputs" className="text-[#7828C8] mb-[28px]" />
      <div className="mb-[16px]">
        <TextInput placeholder="Email" type="email" />
      </div>
      <div className="mb-[28px]">
        <TextInput placeholder="Password" type="password" />
      </div>
    </Fragment>
  );
};

export default InputFieldsSection;
