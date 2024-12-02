import React from "react";
import Image, { StaticImageData } from "next/image";


export default function ClubsCards({ title, image,}: { title ?: string, image: StaticImageData}) {
  return (
    <div className="relative group max-w-lg overflow-hidden shadow-md border-gray-200 mx-auto">
      <Image
      src={image}
      alt = {"poetry image"}
      className="flex flex-col items-center justify-center w-[295px] lg:w-[400px] h-[272px] bg-gray-100 object-cover"
      width={400}
      height={272}
      />
      {/* Hover Effect */}
      <div className="absolute bottom-0 left-0 w-full bg-[#FD8F16] text-white text-2xl font-semibold text-center py-2 opacity-100">
       {title}
      </div>
    </div>
  );
}
