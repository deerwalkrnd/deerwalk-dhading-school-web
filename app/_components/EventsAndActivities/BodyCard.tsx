import React from "react";
import EventsCard from "./EventsCard";
import SifalNightImage from "@/_assets/images/DSN7and8.jpg";
import NationalMuseumImage from "@/_assets/images/stayconnected.png";
import NaturalHistoryMuseumImage from "@/_assets/images/background.png";
import StudentExchangeProgramImage from "@/_assets/images/DLC_Banner.png";
import DeerwalkSifalSchoolImageVandVI from "@/_assets/images/sifalnight.jpg";
import ProjectWorkDisplayImage from "@/_assets/images/ProjectWorkdisplay.jpg";
import DeerwalkSifalSchoolImageIandII from "@/_assets/images/DSNOneandTwo.jpg";
import GraduationImage from "@/_assets/images/Graduation.jpg"


export default function BodyCard() {
  return (
    <div className="flex flex-col w-full gap-20">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20 px-4 sm:px-10 lg:px-20">
        <EventsCard
          image = {SifalNightImage}
          heading="Deerwalk Sifal Night | Grade 7&8"
          description="Deerwalk Sifal School held Deerwalk Sifal Night on Ashwin 11, 2081, where Grades VII and VIII showcased talents in music, dance, theatre, and more, earning enthusiastic cheers from parents."
        />
        <EventsCard
          image = {NationalMuseumImage}
          heading="Visit to National Museum | Grade 4"
          description="Grade IV students visited the National Museum in Chhauni, exploring Nepalese art styles across various galleries and viewing ancient pieces from the 14th to 18th centuries."
        />
        <EventsCard
          image = {NaturalHistoryMuseumImage}
          heading="Visit to Natural History Museum | Grade 3"
          description="Grade III students visited the Natural History Museum in Swoyambhu to learn about Nepal's diverse animal species. They explored taxidermy exhibits, bones, fossils, and insect collections, sparking curiosity and deeper understanding."
        />
        <EventsCard
          image = {StudentExchangeProgramImage}
          heading="Student Exchange Program | Grade 8"
          description="On September 23, 2024, 17 Grade 8 students visited Deerwalk Dhading School with Mr. Durga Puri from the Nepali department. Paired with local students, they followed the school routine, toured the campus, and enjoyed the welcoming ambiance."
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20 px-4 sm:px-10 lg:px-20">
        <EventsCard
          image = {DeerwalkSifalSchoolImageVandVI}
          heading="Deerwalk Sifal School | Grade 5&6"
          description="On 4th Asoj, 2081, lower Middle Schoolers enthusiastically hosted Deerwalk Sifal Night. Parents enjoyed diverse performances, including drama, songs, themed dances, artwork displays, and engaging interludes, all thoughtfully presented."
        />
        <EventsCard
          image = {ProjectWorkDisplayImage}
          heading="Project Work Display | National Education Day"
          description="On National Education Day, students from Grades 1 to 12 showcased their Project Work in STEM, Social Science, Language, and more, highlighting Term I’s dedication and creativity. This hands-on approach, a core part of Sifal School’s teaching, fosters learning through experience and is practiced each term. ."
        />
        <EventsCard
          image = {DeerwalkSifalSchoolImageIandII}
          heading="Deerwalk Sifal School | Grade 1&2"
          description="Deerwalk Sifal Night on Bhadra 14 was unforgettable as Grade 1 and 2 students showcased their talents through lively dances and creative art displays. The highlight was the beautiful Mithila Art, with vibrant colors and intricate patterns, adding cultural charm to the event. Parents beamed with pride, celebrating their children's achievements."
        />
        <EventsCard
          image = {GraduationImage}
          heading="Graduation"
          description="The graduation ceremony celebrates students' achievements with honors for excellence in clubs, community service, public speaking, and academics. Heartfelt speeches from faculty and families, along with a valedictorian address and closing remarks by Chairperson Mr. Hitesh Karki, made it a proud and memorable event."
        />
      </div>
    </div>
  );
}
