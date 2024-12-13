import LibraryPage from "@/_pages/LibraryPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "The Deerwalk Dhading School library is a hub of knowledge and inspiration, offering students a diverse collection of books and resources to fuel their learning journey.",
};

export default function LibraryMainPage() {
  return (
      <LibraryPage />
  );
}
