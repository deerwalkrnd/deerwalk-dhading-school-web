import React, { ReactElement } from "react";


export default function Header2({heading}:{
    heading ?: string
}):ReactElement{
    return(
        <div className="w-fit flex flex-col font-semibold lg:text-4xl text-2xl gap-2 pt-10">
            <span>{heading}</span>
            <div className="flex justify-end w-[115%] lg:w-[110%]">
            </div>
        </div>
    )
}