import Link from "next/link";
import React, { ReactElement } from "react";
const WHYDSS = "/#whyDss"
const ADMISSION = "/#admission"
const ACADEMICS = "/#academics"


export default function FooterCardsII({text1, text2, text3, text4, text6}:
  {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    text6?: string;
  }
) : ReactElement{
  return (
    <div className="flex flex-col items-start text-left w-fit h-full text-sm lg:text-lg">
      <p className="font-semibold">About</p>
      <Link href={WHYDSS}><p>{text1}</p></Link>
      <Link href={ACADEMICS}><p>{text2}</p></Link>
      <Link href="/management"><p>{text3}</p></Link>
      <Link href="/clubs"><p>{text4}</p></Link>
      <Link href={ADMISSION}><p>{text6}</p></Link>
    </div>
  );
  }

