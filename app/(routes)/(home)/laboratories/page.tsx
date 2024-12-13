import LaboratoriesSection from "@/_sections/LaboratoriesSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory",
  description: "State-of-the-art laboratories at Deerwalk Dhading School provide students with hands-on experiences in science, technology, and innovation, fostering critical thinking and discovery.",
};

export default function LaboratoriesMainPage() {
  return (
      <LaboratoriesSection />
  );
}