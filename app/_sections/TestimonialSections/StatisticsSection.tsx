import StatisticsCard from "@/_components/testimonial/StatisticsCard";
import React from "react";
import RatioCard from "@/_components/testimonial/RatioCard";
import BackgroundImage from "@/_assets/images/stats.png";
import Image from "next/image";

export default function StatisticsSection() {
  return (
    
    <div className = {`w-full h-[29rem] flex items-center relative bg-gradient-to-b from-black/10 to-black/10`}>
      <Image
        src={BackgroundImage}
        alt = "background image"
        width={1920}
        height={464}
        className="absolute w-full h-full object-cover -z-10"
      />

      <div className="container mx-auto">
      <div className="flex lg:flex-row md:flex-row flex-col lg:justify-evenly md:justify-evenly justify-center lg:items-start md:items-start items-center w-full text-white z-10">

        <div className="flex gap-5 lg:w-full md:w-full w-44 justify-evenly lg:flex-row md:flex-row flex-col">
          <StatisticsCard number="560" description="Students" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>


        <div className="flex gap-5  lg:w-full md:w-full w-44 justify-evenly whitespace-nowrap lg:flex-row md:flex-row flex-col">
          <StatisticsCard number="24" description="Student per Class" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>
          

        <div className="flex gap-5 lg:w-full md:w-full w-44 justify-evenly lg:flex-row md:flex-row flex-col">
          <StatisticsCard number="60" description="Teachers" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>
        
        <div className="lg:w-full md:w-full w-44 flex justify-center whitespace-nowrap lg:flex-row md:flex-row flex-col">
          <RatioCard description="Student : Teacher" ratio1="9" ratio2="1" />
        </div>
      </div>
    </div>
    </div>
  );
}
