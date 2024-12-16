import EventsPage from "@/_pages/EventsPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "From cultural celebrations to academic showcases, events at Deerwalk Dhading School bring the community together to celebrate learning, creativity, and tradition.",
};

const EventsMainPage = () => {
  return <EventsPage />;
};

export default EventsMainPage;
