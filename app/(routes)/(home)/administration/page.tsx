import AdministrationPage from "@/_pages/AdministrationPage";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Administration",
  description: "Deerwalk Dhading School fosters a vibrant and inclusive learning environment, guided by a dedicated administration that ensures every student's journey is seamless and enriching. Our team is committed to upholding the school’s values of academic excellence, personal growth, and community support.",
};

const FacultyMainPage = () => {
  return <AdministrationPage />;
};

export default FacultyMainPage;