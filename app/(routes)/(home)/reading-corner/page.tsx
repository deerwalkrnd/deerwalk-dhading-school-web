import ReadingCornerPage from "@/_pages/ReadingCornerPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading Corner",
  description: "Our reading corner is a cozy space where students can immerse themselves in the joy of reading, fostering a lifelong love for literature and learning.",
};

export default function ReadingCornerMainPage() {
  return (
      <ReadingCornerPage />
  );
}
