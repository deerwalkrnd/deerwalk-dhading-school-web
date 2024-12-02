import Link from "next/link";
import React, { ReactElement } from "react";

export default function FooterCardsIV(): ReactElement {
  return (
    <div className="flex flex-col items-start w-[250px] h-full text-sm lg:text-lg text-white">
      <p className="font-semibold">Contact</p>
      <p>Sifal, Kathmandu, Nepal</p>
      <Link href="tel:01-4591249">01-4591249</Link>
      <Link href="tel:9851064445">9851064445 (Alisha Shakya)</Link>
      <Link href="tel:9861789947">9861789947 (Usha Adhikari)</Link>
    </div>
  );
}
