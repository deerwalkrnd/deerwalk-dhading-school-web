import React from "react";
import ManagementCard from "@/_components/Management/ManagementCard";
import RudraSirImage from "@/_assets/images/rudrasir.png"
import QuotationImage from "@/_assets/images/quotation.png"
import UjjwalSirImage from "@/_assets/images/ujjwalsir.png"
import MadhuSirImage from "@/_assets/images/madhusir.png"

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
        image1={UjjwalSirImage}
        image2 = {QuotationImage}
        description="Deerwalk Sifal School firmly believes in education as a journey of discovery and the integration of new findings into each person's life.The Teaching Learning process incorporates a different methods, including collaborative learning, project-based activities, interdisciplinary projects and community engagement to ensure that students yield the best ideas that help them retain their knowledge throughout their lives. We mainly focus on reading, writing, coding, and major essential skills which serve as a medium to broaden the spectrum of young minds. "
        desc="Apart from the advanced teaching process, we are committed to providing nurturing care from our highly skilled teachers, who apart from teaching, also serve as counselors to ensure an inclusive and unbiased environment for all. We provide the best approaches to meet each of our student's needs, valuing their interests and limitations to give them the best possible learning environment. One of our major goals in this journey is to help students bring out their hidden strengths and push their boundaries to excel in their field of interest and rise into capable individuals."
        name="Ujjwal Poudel"
        rank="- Vice Principal of Administrative Affairs"
      />
      <ManagementCard
        classNameOne="flex xl:flex-row flex-col max-w-[79.28rem] h-full xl:gap-20 gap-10 items-center"
         image1={MadhuSirImage}
        image2 = {QuotationImage}
        description="At Deerwalk Sifal School, we are committed to the holistic development of our students. Our integrated approach incorporates academic, personal, and social knowledge with practical life skills essential in preparing the students to thrive in the dynamic and ever-changing world that we live in."
        desc="By fostering these skills, our curriculum readies our students not only for higher education but also for careers, well rounded lives, and more importantly: aid them in becoming tomorrow’s responsible and creative citizens."
        name="Madhu Sudhan Bhusal"
        rank="- Vice Principal of Academic Affairs"
      />
    </div>
  );
}
