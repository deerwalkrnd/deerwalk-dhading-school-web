import StatisticsCard from "@/_components/testimonial/StatisticsCard";
import React from "react";
import RatioCard from "@/_components/testimonial/RatioCard";
import BackgroundImage from "@/_assets/images/stats.jpg";
import Image from "next/image";

export default function StatisticsSection() {
  return (
    
    <div className = {`w-full h-[29rem] flex items-center relative bg-gradient-to-b from-black/30 to-black/30`}>
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
          <StatisticsCard number="190" description="Students" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>


        <div className="flex gap-5  lg:w-full md:w-full w-44 justify-evenly whitespace-nowrap lg:flex-row md:flex-row flex-col">
          <StatisticsCard number="29" description="Teachers" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>
          

        <div className="flex gap-5 lg:w-full md:w-full w-44 justify-evenly lg:flex-row md:flex-row flex-col">
        <RatioCard description="Student : Teacher" ratio1="6" ratio2="1" />
          <div className="border-solid lg:border-r-2 md:border-r-2  border-t-2 border-white mb-3" />
        </div>
        
        <div className="lg:w-full md:w-full w-44 flex justify-center whitespace-nowrap lg:flex-row md:flex-row flex-col">
          <RatioCard description="Boy : Girl" ratio1="5" ratio2="3" />
        </div>
      </div>
    </div>
    </div>
  );
}
