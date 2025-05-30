import React, { ReactElement } from "react";
import HeroSection from "@/_sections/HeroSections/HeroSections";
import DescriptionSection from "@/_sections/HeroSections/DescriptionSection";
import PopupCard from "@/_components/popup/popupCard";

export default function HeroPage():ReactElement{
    return(
        <div className= "w-full h-[71rem]" id = "whyDss">
            <PopupCard />
            <HeroSection />
            <DescriptionSection />
        </div>
    );
}