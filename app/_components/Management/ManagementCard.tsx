import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

export default function ManagementCard({
    classNameOne,
    description,
    desc,
    name,
    rank,
    image1,
    image2
}:{
    classNameOne ?: string,
    description ?: string,
    desc?:string,
    name ?: string,
    rank ?: string,
    image1 : StaticImageData,
    image2 : StaticImageData,

}): ReactElement{
    return(
        <div className={`${classNameOne}`}>
            <Image
                src = {image1}
                alt = "management image"
                className="rounded-full w-[20rem] h-[20rem] xl:w-[25rem] xl:h-[25rem] object-cover"
                width={400}
                height={400}
                loading="eager"
                />
            <div className="flex gap-2 xl:gap-5 max-w-[48rem]">
                <Image
                    src = {image2}
                    alt = "quotation"
                    className="w-[4rem] h-fit flex flex-col"
                    width={12}
                    height={12}
                />
                <div className="flex flex-col gap-10">
                    <div>
                    <div className="xl:text-xl lg:text-lg md:text-md text-sm text-wrap text-start">{description}</div>
                    <div className="mt-5 xl:text-xl lg:text-lg md:text-md text-sm text-wrap text-start">{desc}</div>
                    </div>
                    
                    <div className="xl:text-start text-center">
                        <p className="xl:text-3xl lg:text-2xl text-xl">{name}</p>
                        <p className="lg:text-lg text-base">{rank}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}