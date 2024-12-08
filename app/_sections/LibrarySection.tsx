import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import LibraryImage from "@/_assets/images/Library.jpg";
import LibraryImage2 from "@/_assets/images/LibrarySingle.jpg"

export default function LibrarySection() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 mb-10">
        <div className="flex justify-center items-center">
          <Header2 heading="Facilities" />
        </div>
        <div className="w-full">
          <LibraryCard
            title="LIBRARY"
            image = {LibraryImage}
             imgPosition = "object-center"
            textSize="lg:text-5xl text-4xl"
          />
        </div>
        <div className="w-full container mx-auto">
          <LibraryCardII
            image = {LibraryImage2}
            classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center  items-center`}
            description="The library at DDS is a welcoming space for students to explore a wide range of books and resources. It supports their learning and research needs while fostering a love for reading."
            title="LIBRARY"
          />
        </div>
      </div>
    </div>
  );
}
