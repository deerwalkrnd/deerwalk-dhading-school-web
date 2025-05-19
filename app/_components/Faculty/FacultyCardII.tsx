"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LinkedInIcon from "@/_assets/icons/linkedin";
import GmailIcon from "@/_assets/icons/gmail";
import Data from "@/_components/Faculty/Data";
import Link from "next/link";

interface FacultyCardProps {
  name: string;
  image: StaticImageData | string;
  description: string;
  linkedIn: string;
  gmail: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  image,
  description,
  linkedIn,
  gmail,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-row flex-wrap gap-10 mt-5 text-[#2E2E2E]">
      <div className="flex justify-center gap-10">
        <div className="flex flex-col">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              className={`w-52 h-56 md:w-40 md:h-44 lg:w-52 lg:h-64 2xl:w-60 2xl:h-72 object-cover object-center transition-transform duration-[480ms] ease-in ${
                isHovered ? "[transform:rotateY(180deg)]" : "rotate-0"
              }`}
              src={image}
              width={208}
              height={224}
              alt={`Picture of ${name}`}
            />
            {description && (
              <div
                className={`absolute inset-0 rounded-lg bg-black bg-opacity-70 text-white flex items-center justify-center p-4 text-xs sm:text-md md:text-md 2xl:text-lg transition-opacity duration-300 ease-in-out w-52 h-56 md:w-40 md:h-44 lg:w-52 lg:h-64 2xl:w-60 2xl:h-72  ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-center">{description}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between mx-3 my-1 font-medium text-sm gap-3 md:text-md 2xl:text-lg mt-2">
            <p className="">{name}</p>
            <div className="flex gap-2">
              {linkedIn != "" && (
                <Link href={linkedIn} target="_blank">
                  <LinkedInIcon aria-label="LinkedIn Profile" />
                </Link>
              )}

              {gmail != "" && (
                <Link href={`mailto:${gmail}`} passHref>
                  <GmailIcon aria-label="Email" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FacultyListWithCards: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 lg:gap-16 items-center">
      {Data.map((faculty, indexed) => (
        <FacultyCard
          key={indexed}
          name={faculty.name}
          image={faculty.image}
          description={faculty.description}
          linkedIn={faculty.linkedIn}
          gmail={faculty.gmail}
        />
      ))}
    </div>
  );
};

export default FacultyListWithCards;
