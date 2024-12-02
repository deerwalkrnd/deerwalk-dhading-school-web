import React, { ReactElement } from "react";
import styles from "@/_components/MiddleSchool/app.module.css"

export default function ElementaryList(): ReactElement {
  return (
    <div className="sm:m-10 rounded-lg flex flex-col items-center gap-10 justify-center py-8 relative overflow-hidden ">
      <div className="text-[#00247F] text-2xl sm:text-[2.5rem] font-semibold text-center my-10">
        <p>Evaluation System and Breakdown</p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        
        <div
          className={`${styles.pieImageMid} lg:w-[28rem] lg:h-[28rem] w-[20rem] h-[20rem]  border-black`}
        ></div>
        <div
          className={`${styles.evaluationImage} lg:w-96 lg:h-96 w-72 h-72  border-black`}
        ></div>
      </div>
      <p className="font-semibold text-2xl ">CAS: Continuous Assessment System</p>
    </div>
  );
}
