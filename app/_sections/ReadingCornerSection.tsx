import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import ReadingCornerImage from "@/_assets/images/ReadingCorner.jpg";

export default function ReadingCornerSection() {
  return (
    <div>
    <div className="flex flex-col justify-center items-center gap-10 mb-10">
      <div className="flex justify-center items-center">
        <Header2 heading="Facilities" />
      </div>
      <div className="w-full">
        <LibraryCard
          title="READING CORNER"
          image = {ReadingCornerImage}
          textSize="lg:text-5xl text-4xl"
        />
      </div>
      <div className="w-full container mx-auto">
        <LibraryCardII
          image = {ReadingCornerImage}
          classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center  items-center`}
          description="The Reading Corner is a cozy area designed to encourage students to read and enjoy literature. It provides a quiet space for relaxation and exploration of different genres and topics."
          title="READING CORNER"
        />
      </div>
    </div>
  </div>
  );
}
