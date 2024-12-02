import Link from "next/link";
import React, { ReactElement } from "react";

export default function AdmissionCardIII({
    title,
}: {
    title?: string;
}): ReactElement {
    return (
        <div className="w-fit flex flex-col gap-2 text-lg lg:text-2xl">
            <span><Link href="https://application-dss.deerwalk.edu.np/" target="_blank">{title}</Link></span>
            {<div className="w-[50%] border-solid border-b-2 border-[#EA5D0FCC]"></div>}
        </div>
    );
}
