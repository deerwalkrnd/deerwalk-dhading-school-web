"use client";
import React from "react";
import Image from "next/image";
import highSchool from "@/_assets/images/high.png";
import elementarySchool from "@/_assets/images/lower.png";

export default function AcademicsSection() {
  return (
    <div className="w-full gap-2 px-10" id="academics">
      <div className="font-semibold lg:text-4xl text-2xl py-5 mb-16 text-center w-screen">
        Academics
      </div>
      <div className="">
        <div className="flex flex-col gap-10 2xl:gap-32 mx-20 xl:flex-row justify-center min-h-80">
          <div className="flex justify-center gap-5">
            <Image
              src={highSchool}
              alt="High School Image"
              className=" h-[25rem] xl:w-80 object-contain"
              width={300}
              height={400}
            />
            <div className=" ">
              <p className="text-3xl mb-5 font-semibold">Senior School</p>
              <p className="  ">
                Our high school program is designed to prepare students for
                academic success and personal development. Through advanced
                coursework, diverse extracurricular activities, and personalized
                guidance, we empower students to excel academically, pursue
                their passions, and prepare for higher education and future
                careers.
              </p>
            </div>
          </div>
          <div className="flex">
            <Image
              src={elementarySchool}
              alt="Elementary School Image"
              className="h-[25rem] xl:w-80 object-contain"
              width={300}
              height={400}
            />
            <div className="">
              <p className="text-3xl mb-5 font-semibold">Junior School</p>
              <p className="">
                Our elementary program provides a nurturing environment where
                young learners develop a strong academic foundation. Through a
                balanced curriculum and personalized attention, we foster
                essential skills, instilling a lifelong love of learning from
                the very beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
