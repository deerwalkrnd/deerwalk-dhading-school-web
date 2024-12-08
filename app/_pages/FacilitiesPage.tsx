import React from "react";
import AdmissionSection from "@/_sections/AdmissionSection";

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <div className=" flex justify-center w-full bg-DSS_Blue pt-10">
        <AdmissionSection />
      </div>
      {/* <div className="relative w-full"> */}
        {/* <div className={`${styles.background_facilities_image} w-full h-[710.23px]`}>
          <div className="absolute inset-0  flex items-center">
            <div className="px-12">
              <FacilitiesSection />
            </div>
          </div>
        </div>
      </div> */}

      
    </div>
  );
}
