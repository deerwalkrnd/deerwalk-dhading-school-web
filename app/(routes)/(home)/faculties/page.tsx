import FacultyPage from "@/_pages/FacultyPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculties",
  description: "From cultural celebrations to academic showcases, events at Deerwalk Dhading School bring the community together to celebrate learning, creativity, and tradition.",
};

const FacultyMainPage = () => {
  return <FacultyPage />;
};

export default FacultyMainPage;
