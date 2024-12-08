import React, { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function LibraryCardII({
  description,
  classNameOne,
  title,
  image
}: {
  description?: string;
  classNameOne?: string;
  title?: string;
  image : StaticImageData;
}): ReactElement {
  return (
    <div className={`${classNameOne} mb-10 w-full flex lg:flex-row flex-col  justify-evenly items-center`}>
      <div className="flex lg:flex-row-reverse lg:gap-32 gap-10 flex-col w-full justify-center items-center">
        <div className="flex w-full md:w-[35rem] lg:w-[35rem] h-[16rem] px-4">
          <Image
            src = {image}
            alt = "Facility Image2"
            className="w-full h-full object-cover"
            width={440}
            height={256}
            loading="eager"
          />
          {/* <div className={`${classNameTwo}`}></div> */}
        </div>
        <div className="my-auto flex flex-col gap-5 max-w-[37rem] pt-5 px-5">
          <p className="text-lg lg:text-xl font-thin text-start">{description}</p>
        </div>
      </div>

      <div className="lg:flex lg:flex-col flex-row w-fit h-full ml-10 hidden">
        <Link href="/transportation">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "TRANSPORTATION"
                ? "bg-DSS_Blue text-white hover:bg-DSS_Blue"
                : "bg-white"
            }`}
          >
            Transportation
          </button>
        </Link>
        <Link href="/canteen">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "CANTEEN"
                ? "bg-DSS_Blue text-white hover:bg-DSS_Blue"
                : "bg-white"
            }`}
          >
            Canteen
          </button>
        </Link>
        <Link href="/library">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "LIBRARY"
                ? "bg-DSS_Blue text-white hover:bg-DSS_Blue"
                : "bg-white"
            }`}
          >
            Library
          </button>
        </Link>
        <Link href="/laboratories">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "LABORATORIES"
                ? "bg-DSS_Blue text-white hover:bg-DSS_Blue"
                : "bg-white"
            }`}
          >
            Laboratories
          </button>
        </Link>
        <Link href="/reading-corner">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "READING CORNER"
                ? "bg-DSS_Blue text-white hover:bg-DSS_Blue"
                : "bg-white"
            }`}
          >
            Reading Corner
          </button>
        </Link>
        <Link href="/sports-yard">
          <button
            className={`border border-DSS_Blue w-[12rem] py-2  text-[#0F5288] hover:bg-gray-100 font-semibold ${
              title == "SPORTS YARD"
                ? "bg-DSS_Blue text-white hover:bg-[#1f4463]"
                : "bg-white"
            }`}
          >
            Sports Yard
          </button>
        </Link>
      </div>
    </div>
  );
}
