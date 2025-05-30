import React, { ReactElement } from "react";
import OpportunitiesCard from "@/_components/Opportunities/OpportunitiesCard";
import CommunityEngagementImage from "@/_assets/images/CommunityEngagement.jpg";
import ProjectWorkImage from "@/_assets/images/Project_work.jpg";
import TeachingAssistanceImage from "@/_assets/images/Teachers_assistance.jpg";
import InternshipImage from "@/_assets/images/Internship_new.jpg"
export default function OpportunitiesSection(): ReactElement {
  return (
      <div className="flex flex-col h-full justify-evenly items-center w-full mb-10">
        <OpportunitiesCard
          image = {CommunityEngagementImage}
          classNameOne={`flex lg:flex-row lg:gap-28 gap-5 flex-col justify-center items-start `}
          heading="Community Engagement"
          description="Students participate in initiatives that connect them with local organizations, fostering a sense of responsibility and belonging within the community."
        />

        <OpportunitiesCard
          image = {TeachingAssistanceImage}
          classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center items-start`}
          heading="Teaching Assistance"
          description="Students can reinforce their knowledge and support their peers by taking on teaching assistant roles, enhancing their learning experience"
        />

        <OpportunitiesCard
          image = {ProjectWorkImage}
          classNameOne={`flex lg:flex-row lg:gap-28 gap-5 flex-col justify-center items-start`}
          heading="Project Work"
          description="Through collaborative projects, students tackle real-world challenges, enhancing their teamwork and problem-solving skills."
        />

        <OpportunitiesCard
          image = {InternshipImage}
          classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center items-start`}
          heading="Internship"
          description="Internship opportunities allow students to explore various career paths and gain valuable practical experience in professional environments."
        />
      </div>
  );
}
