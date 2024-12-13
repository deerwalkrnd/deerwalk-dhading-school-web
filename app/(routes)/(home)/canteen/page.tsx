import CanteenPage from "@/_pages/CanteenPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canteen",
  description: "The Deerwalk Dhading School canteen offers a variety of nutritious and delicious meals, fostering healthy eating habits in a friendly, hygienic environment for students and staff alike.",
};

export default function CanteenMainPage() {
  return (
      <CanteenPage />
  );
}