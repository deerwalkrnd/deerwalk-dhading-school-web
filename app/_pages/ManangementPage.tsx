import React, { ReactElement } from "react";
import ManagementSection from "@/_sections/ManagementSection";
import Heading from "@/_components/Opportunities/Heading";

export default function ManagementPage(): ReactElement {
  return (
    <div className="flex flex-col gap-40 pt-5">
      <div className="w-full h-full flex items-center flex-col gap-20">
        <Heading heading="Management" />
        <ManagementSection />
      </div>
    </div>
  );
}
