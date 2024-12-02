import React from "react";
import OpportunitiesSection from "@/_sections/OpportunitiesSection";
import Heading from "@/_components/Opportunities/Heading";

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col gap-20">
      <div className="w-full h-full px-10 py-10 flex flex-col items-center gap-10 lg:gap-20 justify-center">
        <Heading heading="Opportunities" />
        <OpportunitiesSection />
      </div>
    </div>
  );
}
