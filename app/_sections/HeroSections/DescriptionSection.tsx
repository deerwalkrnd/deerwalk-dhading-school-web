"use client";

import React, { useState } from "react";
import TitleCard from "@/_components/Hero/TitleCard";
import BackgroundText from "@/_components/Hero/BackgroundText";
import DescriptionText from "@/_components/Hero/DescriptionText";
import titleCards from "./data";

export default function DescriptionSection() {
  const [activeCard, setActiveCard] = useState("Academic Fundamentals");

  const activeDescription = titleCards.find(
    (card) => card.title === activeCard
  )?.description;

  return (
    <div className="h-[33.5rem] w-full bg-[#0F5288] flex justify-center items-center relative p-4 sm:p-6 md:p-8">
      <div className="max-w-[79rem] w-full h-full  flex flex-row lg:flex-col items-center gap-8 justify-evenly">
        <div className="flex flex-col gap-6 lg:flex-row text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold justify-center">
          {titleCards.map((card) => (
            <div
              key={card.title}
              className="cursor-pointer"
              onClick={() => setActiveCard(card.title)}
            >
              <TitleCard
                title={card.title}
                isActive={activeCard === card.title}
              />
            </div>
          ))}
        </div>

        <DescriptionText description={activeDescription} />
      </div>

      <BackgroundText text={activeCard} />
    </div>
  );
}
