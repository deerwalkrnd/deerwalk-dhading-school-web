import React, { ReactElement } from "react";


export default function GradeDivision({number}:{
    number ?: string
}):ReactElement{
    return (
      <div className={`flex items-center justify-center lg:h-32 h-24 lg:w-32 w-20 rounded-md bg-[#0F5288]`}>
        <div className="text-white text-center">
          <p className="text-lg font-semibold">Grade</p>
          <p className="text-3xl font-semibold">{number}</p>
        </div>
      </div>
    );
  }
  