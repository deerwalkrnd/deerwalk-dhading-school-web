import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import TransportationImage from "@/_assets/images/Transportation.jpg"
import TransportationImage2 from "@/_assets/images/Transportation2.png"

export default function TransportationSection() {
  return (
      <div>
        <div className="flex flex-col justify-center items-center gap-10 mb-10">
          <div className="flex justify-center items-center">
            <Header2 heading="Facilities" />
          </div>
          <div className="w-full">
            <LibraryCard
              title="TRANSPORTATION"
              image = {TransportationImage}
              textSize="lg:text-5xl text-4xl"
            />
          </div>
          <div className="w-full container mx-auto">
            <LibraryCardII
              image = {TransportationImage2}
              classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center items-center`}
              description="DDS provides safe and reliable transportation services to ensure students can commute to and from school conveniently. Our transportation is managed with care and prioritizes student safety."
              title="TRANSPORTATION"
            />
          </div>
        </div>
      </div>
  );
}
