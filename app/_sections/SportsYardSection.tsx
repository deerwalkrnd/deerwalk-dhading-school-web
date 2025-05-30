import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import SportsYardImage from "@/_assets/images/dds_sports_yard.png"
import SportsYardImage2 from "@/_assets/images/SportsYardsingle.jpg"

export default function SportsYardSection() {
  return (
    <div>
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <div className="flex justify-center items-center">
        <Header2 heading="Facilities" />
      </div>
      <div className="w-full">
        <LibraryCard
          image = {SportsYardImage}
          title="SPORTS YARD"
          textSize="lg:text-5xl text-4xl"
        />
      </div>
      <div className="w-full container mx-auto">
        <LibraryCardII
          image = {SportsYardImage2}
          classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center  items-center`}
          description="The Sports Yard offers ample space for outdoor activities and sports, promoting physical fitness and teamwork. It is a hub for students to engage in various sports and recreational activities, fostering a spirit of healthy competition."
          title="SPORTS YARD"
        />
      </div>
    </div>
  </div>
  );
}
