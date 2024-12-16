import MiddleSchoolPage from "@/_pages/MiddleSchoolPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Middle School",
  description: "Our middle school program bridges the transition from childhood to adolescence, focusing on academic exploration, character development, and resilience.",
};

const MiddleSchoolMainPage = () => {
  return <MiddleSchoolPage />;
};

export default MiddleSchoolMainPage;
