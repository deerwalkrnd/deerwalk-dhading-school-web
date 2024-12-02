import React from "react";
import Heading1 from "@/_components/Clubs/Heading1";
import ClubsCards from "@/_components/Clubs/ClubsCards";
import PoetryImage from "@/_assets/images/poetry.jpg";
import DanceClubImage from "@/_assets/images/dance.jpg";
import DebateImage from "@/_assets/images/debate.jpg";
import yogaImage from "@/_assets/images/Yog.jpg";
import MusicImage from "@/_assets/images/Music.jpg";
import StemImage from "@/_assets/images/Stem.jpg";
import ReadingImage from "@/_assets/images/reading.jpg";
import NepaliReadingImage from "@/_assets/images/Nepalireading.jpg";
import MathematicsImage from "@/_assets/images/Mathematics.jpg";
import ForeignImage from "@/_assets/images/Foreign.jpg";
import WritersImage from "@/_assets/images/writers.jpg";
import NewsAndMediaImage from "@/_assets/images/News.jpg";
import TableTennisImage from "@/_assets/images/tabletennis.jpg";
import BadmintonImage from "@/_assets/images/badminton.jpg";
import TaekwandoImage from "@/_assets/images/taekwando.jpg";
import BasketballImage from "@/_assets/images/Basketball.jpg";
import OlympiadImage from "@/_assets/images/Mathsolympiad.jpg";
import ChessImage from "@/_assets/images/Chess.jpg";
import FutsalImage from "@/_assets/images/Futsal.jpg";
import TheatreImage from "@/_assets/images/Theater.jpg";
import VisualArtsImage from "@/_assets/images/Arts.jpg";

export default function ClubsSection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col w-full mb-10">
      <div className="flex flex-col lg:text-2xl lg:flex-row justify-center gap-10 lg:gap-32 items-center mt-12">
        <Heading1 heading="Student Clubs" />
      </div>
      <div className="flex flex-col justify-center min-w-[350px] lg:w-full h-full item-center gap-5 lg:gap-5 pt-20 px-3">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Poetry Club" image={PoetryImage} />
          <ClubsCards title="Dance Club" image={DanceClubImage} />
          <ClubsCards title="Debate Club" image={DebateImage} />
          <ClubsCards title="Yog Club" image={yogaImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Music & Vocal Training Club" image={MusicImage} />
          <ClubsCards title="STEM Club" image={StemImage} />
          <ClubsCards
            title="Advanced English Reading Club"
            image={ReadingImage}
          />
          <ClubsCards
            title="Advanced Nepali Reading Club"
            image={NepaliReadingImage}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="News and Media Club" image={NewsAndMediaImage} />
          <ClubsCards
            title="Advanced Mathematics Club"
            image={MathematicsImage}
          />
          <ClubsCards title="Foreign Language Club" image={ForeignImage} />
          <ClubsCards title="Writer's Club" image={WritersImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Maths Olympiad Club" image={OlympiadImage} />
          <ClubsCards title="Theater Performances" image={TheatreImage} />
          <ClubsCards title="Visual Arts" image={VisualArtsImage} />
          <ClubsCards title="Badminton" image={BadmintonImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Basketball" image={BasketballImage} />
          <ClubsCards title="Chess" image={ChessImage} />
          <ClubsCards title="Futsal" image={FutsalImage} />
          <ClubsCards title="Table Tennis" image={TableTennisImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Taekwondo ITF" image={TaekwandoImage} />
        </div>
      </div>
    </div>
    </div>
  );
}
