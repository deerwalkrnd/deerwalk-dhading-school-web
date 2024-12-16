import SportsYardPage from "@/_pages/SportsYardPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Yard",
  description: "The sports yard at Deerwalk Dhading School promotes physical fitness, teamwork, and sportsmanship through a wide range of engaging activities.",
};

export default function SportsYardMainPage() {
  return (
      <SportsYardPage />
  );
}
