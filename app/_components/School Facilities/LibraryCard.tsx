import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image"

export default function LibraryCard({
  title,
  textSize = "text-5xl",
  image,
  imgPosition
}: {
  title?: string;
  textSize ?: string;
  image : StaticImageData;
  imgPosition ?: string;
}) {
  return (
    <div className="lg:relative w-[350px] lg:w-[950px] xl:w-full lg:h-auto h-full overflow-hidden bg-[#0F5288] mx-auto">
      <Image
        src = {image}
        alt = "facility image1"
        className = {`w-full h-[294.08px] hidden lg:block object-cover ${imgPosition}`}
        width={1920}
        height={295}
        loading="eager"
      />
      {/* <div className={`${className} hidden lg:block`}></div> */}
      <div className="lg:absolute bottom-0 left-0 p-4 w-full text-white">
        <h2 className={`${textSize} font-semibold`}>{title}</h2>
      </div>
    </div>
  );
}
