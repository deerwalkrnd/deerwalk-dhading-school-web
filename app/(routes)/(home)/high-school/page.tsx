import HighSchoolPage from "@/_pages/HighSchoolPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High School",
  description: "Our high school program empowers students to excel academically and prepare for their future endeavors through a rigorous curriculum and personalized support.",
};

const HighSchoolMainPage = () => {
  return <HighSchoolPage />;
};

export default HighSchoolMainPage;
