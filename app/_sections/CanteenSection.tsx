import React from "react";
import LibraryCard from "@/_components/School Facilities/LibraryCard";
import Header2 from "@/_components/School Facilities/Header2";
import LibraryCardII from "@/_components/School Facilities/LibraryCardII";
import CanteenImage from "@/_assets/images/Canteen.jpg"
import CanteenImage2 from "@/_assets/images/dds_foods.png"

export default function CanteenSection() {
  return (
      <div className="">
        <div className="flex flex-col justify-center items-center gap-10 mb-10">
          <div className="flex justify-center items-center">
            <Header2 heading="Facilities" />
          </div>
          <div className="w-full">
            <LibraryCard
              title="CANTEEN"
              image = {CanteenImage}
              textSize="lg:text-5xl text-4xl"
            />
          </div>
          <div className="w-full container mx-auto">
            <LibraryCardII
              image = {CanteenImage2}
              classNameOne={`flex lg:flex-row-reverse lg:gap-28 gap-5 flex-col justify-center  items-center`}
              description="The school canteen serves nutritious meals and snacks, promoting healthy eating habits among students. It offers a variety of options to cater to different tastes and dietary needs."
              title="CANTEEN"
            />
          </div>
        </div>
      </div>
  );
}
