import Heading from "@/_components/plusTwoCurriculum/Heading";
import CurriculumSection from "@/_sections/CurriculumSection";
import React from "react";

const CurriculumPage = () => {
    return(
        <div className="flex flex-col lg:gap-32 gap-14 justify-center items-center py-16">
            <Heading heading="+2 SCIENCE CURRICULUM" />
            <CurriculumSection />
        </div>
    )
}

export default CurriculumPage;