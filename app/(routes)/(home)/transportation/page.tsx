import TransportationSection from "@/_sections/TransportationSection";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation",
  description: "Deerwalk Dhading School offers safe and reliable transportation services, ensuring students travel comfortably to and from school.",
};

export default function TransportationMainPage() {
  return (
      <TransportationSection />
  );
}
