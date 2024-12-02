import React from "react";
import BodyCard from "@/_components/EventsAndActivities/BodyCard";
import Heading from "@/_components/Opportunities/Heading";

export default function EventsSection(){
    return(
        <div className="flex flex-col gap-20 lg:gap-20 justify-center items-center overflow-hidden mb-10 mt-10">
            <Heading heading = "Events & Activities"/>
            <BodyCard />
        </div>
    );
}