import React, { FC, useMemo, useState } from "react";
import { TextInput } from "../../components/text-input";
import { Button } from "../../components/button";
import Chip from "../../components/chip/chip";
import { InsetTextInput } from "../../components/inset-text-input";
import { Label } from "../../components/label";
import { getPosition } from "../../utils/guess-color";
import classNames from "classnames";
import  "./main.styles.css";

type Props = {};

const Main: FC<Props> = () => {
  const [count, setCount] = useState(30);

  const boxes = useMemo(() => {
    const _boxes = Array.from({ length: count });
    return _boxes;
  }, [count]);

  return (
    <div className="p-[40px] shadow w-[468px] rounded-[7px] testAppCard">
      <Label title="1) Add inputs" className="text-[#7828C8] mb-[28px]" />
      <div className="mb-[16px]">
        <TextInput placeholder="Email" type="email" />
      </div>
      <div className="mb-[28px]">
        <TextInput placeholder="Password" type="password" />
      </div>
      <Label className="mb-[28px]" title="2) Add the button" />

      <div className="mb-[28px]">
        <Button>Click me!</Button>
      </div>

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
      {/* Line */}
      <div>
        <Label title="5) add this line" className="mb-[28px]" />

        <div>
          <div className="h-[3px] w-[199px] bg-[#6E25BA]"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
