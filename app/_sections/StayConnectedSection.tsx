import React from "react";
import StayConnectedCardII from "@/_components/StayConnected/StayConnectedCardII";
import HeaderCard from "@/_components/StayConnected/HeaderCard";

export default function StayConnectedSection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col justify-center pt-10 pb-10 gap-14">
      <div className="flex flex-col justify-center items-center">
        <HeaderCard heading="Guiding Values" />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-[4rem] px-4 sm:px-10 lg:px-20 ">
        <StayConnectedCardII
          className="READ"
          description="Reading contributes to a student's intellectual, emotional, and social development. A well read person is a good writer."
          isRead={true}
        />
        <StayConnectedCardII
          className="WRITE"
          description="Writing is a vital communication skill, helping students organize thoughts, analyze information, and present logical arguments."
          isWrite={true}
        />
        <StayConnectedCardII
          className="CODE"
          description="Children should learn to code. Coding helps develop problem solving and logical thinking skills giving adequate opportunity for creativity."
          isCode={true}
        />
      </div>
    </div>
    </div>
  );
}
