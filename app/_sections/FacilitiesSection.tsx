import React from "react";
import FacilitiesCardII from "@/_components/Facilities/FacilitiesCardII";
import Heading from "@/_components/Opportunities/Heading";

export default function FacilitiesSection() {
  return (
    <div className="flex flex-col gap-14 pb-40 lg:pt-16 lg:pl-4 w-full lg:h-[710.59px] mb-10">
      <div className="flex flex-row text-black">
        <Heading heading = "School Facilities" />
      </div>
      <div className="flex flex-row">
        <FacilitiesCardII />
      </div>
    </div>
  );
}
