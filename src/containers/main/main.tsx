import React, { FC } from "react";
import "./main.styles.css";
import {
  ButtonSection,
  ChipsSection,
  GridSection,
  InputFieldsSection,
  LineSection,
} from "..";

type Props = {};

const Main: FC<Props> = () => {
  return (
    <div className="p-[40px] shadow w-[468px] rounded-[7px] test-app-card">
      <InputFieldsSection />
      <ButtonSection />
      <ChipsSection />
      <GridSection />
      <LineSection />
    </div>
  );
};

export default Main;
