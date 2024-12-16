import OpportunitiesPage from "@/_pages/OpportunitesPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "At Deerwalk Dhading School, we provide diverse opportunities for students to explore their passions, excel in academics, and prepare for a bright future.",
};

const OpportunitiesMainPage = () => {
  return <OpportunitiesPage />;
};

export default OpportunitiesMainPage;
