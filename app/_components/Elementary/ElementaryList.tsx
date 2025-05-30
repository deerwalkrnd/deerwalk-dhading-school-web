import React, { ReactElement } from "react";
import CreditCourses from "@/_components/Elementary/CreditCourses";
import Evaluation from "@/_components/Elementary/Evaluation";
import GradeDivision2 from "./GradeDivision2";
import Image from "next/image";
import ESImage from "@/_assets/images/ES_background.png"

export default function ElementaryList(): ReactElement {
  return (
    <div className="">
      <div className="h-fit relative">
        <p className="absolute bottom-5 text-center w-full ml-40% font-semibold text-5xl sm:ml-0 sm:text-[3.5rem] text-white z-20">
          JUNIOR SCHOOL
        </p>
        <div>
          <Image 
            src={ESImage}
            alt="Image"
            className="relative z-0 h-[70vh] object-cover w-full"
            width={1920}
            height={756}
            loading="eager"
          />
        </div>
        <div className="bg-gradient-to-b from-transparent to-black absolute bottom-0 w-full h-56 z-10"></div>
      </div>
      <GradeDivision2 />
      <Evaluation />
      <CreditCourses />
    </div>
  );
}
