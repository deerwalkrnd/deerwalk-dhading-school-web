import React, { ReactElement } from "react";


export default function GradeDivision({number}:{
    number ?: string
}):ReactElement{
    return (
      <div className={`flex items-center justify-center lg:h-32 h-24 lg:w-32 w-20 rounded-md bg-DSS_Blue`}>
        <div className="text-white text-center">
          <p className="lg:text-lg text-sm font-semibold">Grade</p>
          <p className="lg:text-3xl text-sm font-semibold">{number}</p>
        </div>
      </div>
    );
  }
  