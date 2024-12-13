import React from "react";
import ManagementCard from "@/_components/Management/ManagementCard";
import RudraSirImage from "@/_assets/images/rudrasir.png"
import QuotationImage from "@/_assets/images/quotation.png"
import NirmalSirImage from "@/_assets/images/Nirmalsir.png"

export default function ManagementSection() {
  return (
    <div className="flex flex-col gap-20 mb-10 px-5">
      <ManagementCard
        classNameOne="flex xl:flex-row flex-col max-w-[79.28rem] h-full xl:gap-20 gap-10 items-center"
        image1={RudraSirImage}
        image2 = {QuotationImage}
        description="At Deerwalk Sifal School, we take a holistic approach to education. While we strive for excellence in academics, our mission extends beyond that: We teach our students the soft and hard skills they need to become confident and curious citizens of the world."
        desc="
        We focus on reading, writing and coding. Reading a range of texts — fiction, non-fiction, poetry and beyond — helps students expand their vocabularies and become clearer thinkers and writers. Reading and writing skills go hand-in-hand. Students use what they’ve learned from reading to further hone their analytical and creative writing skills and become better communicators. Coding teaches students the art of problem-solving."
        name="Rudra Pandey, PhD."
        rank="- Founder"
      />
      <ManagementCard
        classNameOne="flex xl:flex-row-reverse flex-col max-w-[79.28rem] h-full xl:gap-20 gap-10 items-center"
        image1={NirmalSirImage}
        image2 = {QuotationImage}
        description="Deerwalk Dhading School (DDS) is committed to fostering a culture of learning and inspiration. 
        Our campus community places a strong emphasis on knowledge acquisition while upholding high standards in academics. 
        We focus on four key pillars: Essential Skills, Language Proficiency, Academic Foundations, and Excellence in Extracurricular Activities (ECA), ensuring a well-rounded education for our students. 
        With collaborative efforts from School Management, Students, Parents, and Teachers, we strive to unleash the inherent potential in every student, preparing them to become proud DDS Alumni and responsible global citizens."
        name="Nirmal Kumar Paudel"
        rank="- Principal"
      />
    </div>
  );
}
