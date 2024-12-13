import React from "react";
import AdmissionCard from "@/_components/Admission/AdmissionCard";
import AdmissionCardII from "@/_components/Admission/AdmissionCardII";
import AdmissionCardIII from "@/_components/Admission/AdmissionCardIII";

export default function AdmissionSection() {
  return (
    <div className="container mx-auto flex justify-center items-center" id="admission">
    <div className="flex flex-col gap-20 lg:gap-20 item-evenly lg:w-full w-[350px] h-[555px]">
      <div className="flex flex-col gap-24 lg:gap-20 items-center text-white">
        <AdmissionCard />
        <AdmissionCardII />
      </div>
      <div>
        <div className="flex flex-col lg:text-2xl lg:flex-row text-white justify-center gap-10 lg:gap-32 items-center">
          <AdmissionCardIII title="Apply Now" />
        </div>
        <div className="text-white pt-3 sm:text-lg text-center ">
        <p className="">For immediate assistance, please contact us at:</p>
        <div className="flex justify-center gap-20">
          <div>
          <p className="pt-1 font-semibold">Jelina Joshi  </p>
          <p> Admission Officer</p><p>976-7220526</p>
          </div>
        </div>
        

        </div>
        
      </div>
    </div>
    </div>
  );
}
