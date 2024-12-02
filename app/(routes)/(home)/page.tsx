import HeroPage from "@/_pages/HeroPage";
import TestimonialPage from "@/_pages/TestimonialPage";
import StayConnectedPage from "@/_pages/StayConnectedPage";
import FacilitiesPage from "@/_pages/FacilitiesPage";
import AcademicsPage from "@/_pages/AcademicsPage";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <StayConnectedPage />
      <TestimonialPage />
      <FacilitiesPage />
      <AcademicsPage />
    </div>
  );
}