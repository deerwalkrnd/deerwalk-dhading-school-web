import React from "react";
import EventsCard from "./EventsCard";
import ChildrensDayImage from "@/_assets/images/Childrens Day.jpg";
import ParentsTalk from "@/_assets/images/DDS Parents Talk.jpg";
import SportsMeet1 from "@/_assets/images/DDS Sports Meet Day1.jpg";
import SportsMeet2 from "@/_assets/images/DDS Sports Meet Day2.jpg";
import JuniorTalentImage from "@/_assets/images/Junior Talent Show.jpg";
import SeniorTalentImage from "@/_assets/images/Senior Talent Show.jpg";
import NationalScienceImage from "@/_assets/images/National Science Day.jpg";
import GraduationImage from "@/_assets/images/Graduation.jpg";

export default function BodyCard() {
  return (
    <div className="flex flex-col w-full gap-20">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20 px-4 sm:px-10 lg:px-20">
        <EventsCard
          image={ChildrensDayImage}
          heading="Children's Day"
          description="Deerwalk Dhading School celebrated Children's Day with a variety of engaging performances. Teachers participated in dances, musical performances, recited poems, and presented a lok dohori portraying both teachers and students. The students were thrilled and excited to see their teachers perform for them. The program ended with smiles and laughter."
        />
        <EventsCard
          image={ParentsTalk}
          heading="DDS Parent's Talk"
          description="We are delighted to report the successful hosting of 𝗣𝗮𝗿𝗲𝗻𝘁𝘀 𝗧𝗮𝗹𝗸  session on 𝗔𝘀𝗵𝘄𝗶𝗻 𝟮. This event invited parents to share motivational lectures, struggles, and successes.
          We were honored to have 𝗠𝗿. 𝗦𝗵𝗲𝗸𝗵𝗮𝗿 𝗞𝗮𝗿𝗸𝗶 lead this month’s session and share his experiences and life stories. It was a memorable event that achieved its objective of inspiring and guiding our students"
        />
        <EventsCard
          image={SportsMeet1}
          heading="DDS Sports Meet Day1"
          description="The first day of Deerwalk Dhading School's Sports Meet has successfully concluded, filled with energy, enthusiasm, and healthy competition. Students showcased remarkable talent and team spirit across various events, setting the tone for an exciting series ahead. We look forward to more action and memorable moments as the Sports Meet continues!"
        />
        <EventsCard
          image={SportsMeet2}
          heading="DDS Sports Meet Day2"
          description="Day 2 of the Deerwalk Dhading School Sports Meet brought even more excitement and achievements! Our students displayed outstanding resilience and teamwork, pushing their limits across various athletic events. With every competition, the energy and enthusiasm continue to rise, and we’re thrilled to see such strong sportsmanship from all our participants!"
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20 px-4 sm:px-10 lg:px-20">
        <EventsCard
          image={JuniorTalentImage}
          heading="Junior Talent Show"
          description="Today, our brilliant juniors took center stage in a glittering display of talent, each showcasing their skills and ingenuity. From captivating performance to outstanding act, each student shone and did us proud."
        />
        <EventsCard
          image={SeniorTalentImage}
          heading="Senior Talent Show"
          description="Our senior students amazed us today with a display of skill, creativity, and confidence at the talent show! Each performance reflected their dedication and unique flair, leaving the audience inspired and proud."
        />
        <EventsCard
          image={NationalScienceImage}
          heading="National Science Day"
          description="Deerwalk Dhading School celebrated the 12th National Science Day. Students from different grades demonstrated various experiments and projects to instil enthusiasm toward science among their peers. The program ended with the students having renewed their sense of awe and curiosity."
        />
      </div>
    </div>
  );
}
