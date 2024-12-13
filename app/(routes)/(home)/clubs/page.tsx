import ClubsPage from "@/_pages/ClubsPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Clubs",
  description: "Explore the vibrant club culture at Deerwalk Dhading School, where students unleash their creativity, leadership, and teamwork in diverse extracurricular activities.",
};

const ClubsMainPage = () => {
  return <ClubsPage />;
};

export default ClubsMainPage;
