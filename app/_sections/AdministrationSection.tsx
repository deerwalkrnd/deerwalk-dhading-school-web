import AdministrationCard from "@/_components/Administration/AdministrationCard";
import AdministrationCardII from "@/_components/Administration/AdministrationCardII"
import React from "react";


export default function AdministrationSection() {
  return (
    <div className="cotainer mx-auto">
    <div className="flex flex-col gap-10 pt-5 pl-4 items-center mb-20">
      <AdministrationCard heading="Administration" />
      <div className="flex flex-row lg:mx-10">
        <AdministrationCardII />
      </div>
    </div>
    </div>
  );
}
