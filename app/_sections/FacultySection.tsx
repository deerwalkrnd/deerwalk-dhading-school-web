import React from "react";
import FacultyCard from "@/_components/Faculty/FacultyCard";
import FacultyListWithCards from "@/_components/Faculty/FacultyCardII";

export default function FacultySection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col gap-10 pt-5 pl-4 items-center mb-10">
      <FacultyCard heading="Our Faculty" />
      <FacultyListWithCards />
    </div>
    </div>
  );
}
