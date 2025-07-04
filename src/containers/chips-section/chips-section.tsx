import React, { FC, Fragment } from "react";
import { Label } from "../../components/label";
import Chip from "../../components/chip/chip";

const ChipsSection: FC = () => {
  return (
    <Fragment>
      {/* chip-group */}
      <div className="mb-[28px]">
        <Label
          title="3) Add chips. All chips in the project should have same style"
          className="mb-[28px]"
        />

        <div className="flex gap-[8px]">
          <Chip className="bg-[#7828C8]">test1</Chip>
          <Chip className="bg-[#006FEE]">test2</Chip>
          <Chip className="bg-[#17C964]">test3</Chip>
        </div>
      </div>
    </Fragment>
  );
};

export default ChipsSection;
