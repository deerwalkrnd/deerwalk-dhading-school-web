"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";
import OpenHouseImage from "@/_assets/images/dhading_school_admission.png";
import { X } from "lucide-react";
import { cn } from "@/_utils/utils";

export default function PopupCard() {
  const [showPopup, setShowPopup] = useState(true);

  if (!showPopup) return null;
  const handleBackgroundClick = () => {
    setShowPopup(false);
  };
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={cn(
        `${
          showPopup ? "fixed" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 rounded-lg`
      )}
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg relative w-[65%] lg:w-[33%] md:w-[35%] sm:w-[50%] xs:w-[25%] h-auto"
        onClick={handleContentClick}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => setShowPopup(false)}
        >
          <X className="text-black bg-white opacity-50" />
        </button>
        <Image
          src={OpenHouseImage || "/placeholder.svg"}
          alt="openhouseimage"
          className="h-full rounded-lg"
        />
      </div>
    </div>
  );
}
