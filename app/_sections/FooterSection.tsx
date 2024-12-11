import React from "react";
import FooterCards from "@/_components/Footer/FooterCards";
import FooterCardsII from "@/_components/Footer/FooterCardsII";
import FooterCardsIII from "@/_components/Footer/FooterCardIII";
import FooterCardsIV from "@/_components/Footer/FooterCardIV";

export default function FooterSection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col w-full h-full overflow-hidden items-center bg-DSS_Blue">
      <div className="flex flex-col xl:flex-row justify-between items-start w-full h-full text-white py-10 lg:px-24 px-7 gap-10 xl:gap-48">
        <FooterCardsIII />
        <div className="flex flex-row w-fit gap-10 lg:gap-52">
          <FooterCardsII
            text1="Why DDS?"
            text2="Academics"
            text3="Management"
            text4="School Clubs"
            text5="Alumni"
            text6="Admission"
          />
          <FooterCardsIV />
        </div>
      </div>
      <div className="flex justify-center text-white w-full">
        <FooterCards />
      </div>
    </div>
    </div>
  );
}
