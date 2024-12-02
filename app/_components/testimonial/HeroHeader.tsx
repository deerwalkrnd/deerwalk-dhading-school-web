import React, { ReactElement } from "react";


export default function HeroHeader({heading}:{
    heading ?: string
}):ReactElement{
    return(
        <div className="w-fit flex flex-col font-semibold lg:text-4xl text-2xl gap-2">
            <span>{heading}</span>
            <div className="flex justify-end w-[101%] lg:w-[110%]">
            </div>
        </div>
    )
}