import ElementaryPage from "@/_pages/ElementaryPage";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Junior School",
  description: "Our junior school program builds a strong foundation of curiosity and learning, nurturing young minds in a caring and stimulating environment.",
};

const ElementaryMainPage = () => {
  return <ElementaryPage />;
};

export default ElementaryMainPage;
