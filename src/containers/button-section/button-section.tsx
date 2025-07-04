import React, { FC, Fragment } from "react";
import { Label } from "../../components/label";
import { Button } from "../../components/button";

const ButtonSection: FC = () => {
  return (
    <Fragment>
      <Label className="mb-[28px]" title="2) Add the button" />

      <div className="mb-[28px]">
        <Button>Click me!</Button>
      </div>
    </Fragment>
  );
};

export default ButtonSection;
