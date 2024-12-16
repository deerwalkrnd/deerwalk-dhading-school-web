import Link from "next/link";
import React, { ReactElement } from "react";

export default function FooterCardsIV(): ReactElement {
  return (
    <div className="flex flex-col items-start w-[250px] h-full text-sm lg:text-lg text-white">
      <p className="font-semibold">Contact</p>
      <p>Dhunibesi-9,Dhading,Nepal</p>
      <Link href="tel:976-7220526">976-7220526(Jelina Joshi)</Link>
    </div>
  );
}
