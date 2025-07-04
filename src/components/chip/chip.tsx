import classNames from "classnames";
import React, { FC, ReactElement } from "react";

type Props = {
  children?: ReactElement | string;
  className;
};

const Chip: FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={classNames(
        {
          'rounded-full':true,
          'px-[24px] py-[4px]':true,
          "text-[#FFF]": true,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
