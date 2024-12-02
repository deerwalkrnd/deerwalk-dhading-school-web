import HeroComponent from "@/_components/Hero/HeroCard";
import React, { ReactElement } from "react";

export default function HeroSection(): ReactElement {
  return (
    <div>
      <div
        className={` h-[37.5rem] flex justify-center items-center w-full`}
      >
        <HeroComponent />
      </div>
    </div>
  );
}
