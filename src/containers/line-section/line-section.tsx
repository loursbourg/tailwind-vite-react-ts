import React, { FC, Fragment } from "react";
import { Label } from "../../components/label";

const LineSection: FC = () => {
  return (
    <Fragment>
      {/* Line */}
      <div>
        <Label title="5) add this line" className="mb-[28px]" />
        <div>
          <div className="h-[3px] w-[199px] bg-[#6E25BA]"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default LineSection;
