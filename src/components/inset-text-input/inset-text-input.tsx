import React, { FC } from "react";

type Props = {
  label?: string;
  value?: string | number;
  onChange?: (content: string) => void;
};

const InsetTextInput: FC<Props> = (props) => {
  const { label, value, onChange = () => {} } = props;
  return (
    <div>
      <div className="relative">
        <label className="absolute top-[10px] start-[14px] text-[14px]">
          {label}
        </label>
        <input
          value={value}
          onChange={(x) => onChange(x.target.value)}
          className="text-[#71717A] border-[#E4E4E7] rounded-[5px] border-2 h-[56px] w-[280px] px-[12px] pb-[8px] pt-[29px] text-[14px] font-sans"
        />
      </div>
    </div>
  );
};

export default InsetTextInput;
