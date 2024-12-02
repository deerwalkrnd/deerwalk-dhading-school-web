import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

export default function OpportunitiesCard({
    heading,
    description,
    classNameOne,
    image
}:{
    heading ?: string,
    description ?: string,
    classNameOne ?: string,
    image : StaticImageData
}):ReactElement{
    return(
        <div className = {`${classNameOne} mb-10`}>
            <div className="flex w-full md:w-[35rem] lg:w-[35rem] h-[16rem]">
                <Image
                    src = {image}
                    alt = "Opportunities image"
                    className="w-full h-full object-cover"
                    width={560}
                    height={256}
                />
            </div>
            <div className="my-auto flex flex-col gap-5 max-w-[37rem] pt-5">
                <p className="text-xl lg:text-3xl font-semibold">{heading}</p>
                <p className="text-lg lg:text-xl font-thin">{description}</p>
            </div>
        </div>
    );
}