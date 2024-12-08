import React, { ReactElement } from "react";
import styles from "@/_components/MiddleSchool/app.module.css";
import CreditCourses from "@/_components/MiddleSchool/CreditCourses";
import Evaluation from "@/_components/MiddleSchool/Evaluation";
import GradeDivision2 from "./GradeDivision2";
import Image from "next/image";
import MSImage from "@/_assets/images/MS.jpg";

export default function MiddleSchoolList(): ReactElement {
  return (
    <div className="w-full">
      <div className="h-fit relative">
        <p className="absolute bottom-5 text-center w-full ml-40% font-semibold text-5xl sm:ml-0 sm:text-[3.5rem] text-white z-20">
          MIDDLE SCHOOL
        </p>
        <div className={`${styles.backgroundImage} relative z-0`}>
        <Image 
            src={MSImage}
            alt="Image"
            className="relative z-0 h-[70vh] object-cover"
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
