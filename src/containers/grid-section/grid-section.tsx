import React, { FC, Fragment, useMemo, useState } from "react";
import { Label } from "../../components/label";
import { InsetTextInput } from "../../components/inset-text-input";
import { getPosition } from "../../utils/guess-color";
import classNames from "classnames";

const GridSection: FC = () => {
  const [count, setCount] = useState(30);

  const boxes = useMemo(() => {
    const _boxes = Array.from({ length: count });
    return _boxes;
  }, [count]);
  return (
    <Fragment>
      {/* Grid */}
      <div className="mb-[16px]">
        <Label title="4) do this grid" className="mb-[28px]" />

        <div className="mb-[16px]">
          <InsetTextInput
            label="Number of items"
            value={count}
            onChange={(x) => setCount(Number(x))}
          />
        </div>
        {/* Grid container */}
        <div className=" border border-[#E4E4E7] rounded-[5px] w-[320px] mb-[28px]">
          <div className="px-[10px] py-[9px] flex flex-wrap gap-[4px]">
            {boxes.map((_, index) => {
              const position = getPosition(index, boxes.length);
              return (
                <div
                  className={classNames("w-[16px] h-[16px] rounded-[2px]", {
                    "bg-[#6E25BA]": position === "first",
                    "bg-[#006FEE]": position === "last",
                    "bg-[#17C964]": position === "odd",
                    "bg-[#F5A524]": position === "even",
                  })}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GridSection;
