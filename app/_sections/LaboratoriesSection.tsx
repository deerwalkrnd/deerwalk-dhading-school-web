import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import LaboratoryImage from "@/_assets/images/Laboratories.jpg"
import LaboratoryImage2 from "@/_assets/images/LaboratoriesII.jpg"

export default function LaboratoriesSection() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 mb-10">
        <div className="flex justify-center items-center">
          <Header2 heading="Facilities" />
        </div>
        <div className="w-full">
          <LibraryCard
            title="LABORATORIES"
            image = {LaboratoryImage}
            imgPosition = "object-bottom"
            textSize="lg:text-5xl text-4xl"
          />
        </div>
        <div className="w-full container mx-auto">
          <LibraryCardII
            image = {LaboratoryImage2}
            classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center  items-center`}
            description="Our laboratories are equipped with modern tools and resources, providing students with hands-on experience in science and technology. They enhance learning through practical applications of theoretical concepts."
            title="LABORATORIES"
          />
        </div>
      </div>
    </div>
  );
}
