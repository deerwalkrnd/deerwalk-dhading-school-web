import React, { ReactElement } from "react";
import HeroSection from "@/_sections/HeroSections/HeroSections";
import DescriptionSection from "@/_sections/HeroSections/DescriptionSection";

export default function HeroPage():ReactElement{
    return(
        <div className= "w-full h-[71rem]" id = "whyDss">
            <HeroSection />
            <DescriptionSection />
        </div>
    );
}