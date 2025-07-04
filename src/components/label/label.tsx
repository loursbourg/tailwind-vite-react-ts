import classNames from "classnames";
import React, { FC } from "react";

type Props = {
  title?: string;
  className?: string;
};

const Label: FC<Props> = (props) => {
  const { title, className } = props;
  return (
    <div className={classNames(className)}>
      <label >{title}</label>
    </div>
  );
};

export default Label;
