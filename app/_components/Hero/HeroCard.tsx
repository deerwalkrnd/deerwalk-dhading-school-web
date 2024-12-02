import LandingImage from "@/_assets/images/landing.jpg";
import React, { ReactElement } from "react";
import Image from "next/image";

export default function HeroComponent(): ReactElement {
  return (
    <div className="flex flex-col justify-evenly text-7xl text-white font-semibold h-full">
      <Image
        src={LandingImage}
        className="w-screen h-full object-cover object-center"
        alt="Picture of the author"
        width={1920}
        height={600}
        loading="eager"
      />
    </div>
  );
}
