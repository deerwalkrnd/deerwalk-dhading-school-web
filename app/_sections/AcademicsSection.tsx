"use client";
import React from "react";
import Image from "next/image";
import highSchool from "@/_assets/images/high.png";
import middleSchool from "@/_assets/images/middle.png";
import elementarySchool from "@/_assets/images/lower.png";

export default function AcademicsSection() {
  return (
    <div className="w-full gap-2 px-10" id="academics">
      <div className="font-semibold lg:text-4xl text-2xl py-5 mb-16 text-center w-screen">
        Academics
      </div>
      <div className="">
        <div className="flex flex-col pr-0 2xl:pr-5 2xl:flex-row justify-center min-h-80">
          <div className="flex justify-center gap-5">
            <Image
              src={highSchool}
              alt="High School Image"
              className=" h-[25rem] w-1/2 2xl:w-80 object-contain"
              width={300}
              height={400}
            />
            <div className=" w-1/2 2xl:w-80">
              <p className="text-3xl mb-5 font-semibold">High School</p>
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
              src={middleSchool}
              alt="Middle School Image"
              className="h-[25rem] w-1/2 2xl:w-80 object-contain"
              width={300}
              height={400}
            />
            <div className="w-1/2 2xl:w-80">
              <p className="text-3xl mb-5 font-semibold">Middle School</p>
              <p className="">
                In middle school, we encourage students to explore new ideas,
                expand their knowledge, and build critical thinking skills. With
                a comprehensive curriculum and dedicated teachers, we support
                students transition from elementary education, fostering
                independence, creativity, and personal growth along the way.
              </p>
            </div>
          </div>
          <div className="flex">
            <Image
              src={elementarySchool}
              alt="Elementary School Image"
              className="h-[25rem] w-1/2 2xl:w-80 object-contain"
              width={300}
              height={400}
            />
            <div className="w-1/2 2xl:w-80">
              <p className="text-3xl mb-5 font-semibold">Elementary School</p>
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
