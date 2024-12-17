import React from "react";
import Image, { StaticImageData } from "next/image";

export default function EventsCard({description, heading, image}:{description ?: string,date?:string, heading?:string, image:StaticImageData}) {
  return (
    <div className="w-[350px] lg:w-[400px] h-full flex flex-col bg-white rounded-sm shadow-md overflow-hidden justify-between transform transition-transform duration-300 hover:-translate-y-8">
      <Image
        src = {image}
        alt = "events image"
        className="w-full h-52 object-cover"
        width={380}
        height={208}
      />

      {/* Content Section */}
      <div className="flex flex-col pt-4 gap-2 min-h-[280px]">
        <p className="pl-4 text-lg font-bold">{heading}</p>
        <p className="text-gray-700 text-base mb-4 pl-4">
          {description}
        </p>
      </div>
      
    </div>
  );
}


