import React from "react";
import Heading1 from "@/_components/Clubs/Heading1";
import ClubsCards from "@/_components/Clubs/ClubsCards";
import DanceClubImage from "@/_assets/images/dance.jpg";
import yogaImage from "@/_assets/images/Yog.jpg";
import MusicImage from "@/_assets/images/Music.jpg";
import TableTennisImage from "@/_assets/images/tabletennis.jpg";
import BadmintonImage from "@/_assets/images/badminton.jpg";
import ChessImage from "@/_assets/images/Chess.jpg";

export default function ClubsSection() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col w-full mb-10">
      <div className="flex flex-col lg:text-2xl lg:flex-row justify-center gap-10 lg:gap-32 items-center mt-12">
        <Heading1 heading="Student Clubs" />
      </div>
      <div className="flex flex-col justify-center min-w-[350px] lg:w-full h-full item-center gap-5 lg:gap-5 pt-20 px-3">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 py-1 px-20">
          <ClubsCards title="Badminton Club" image={BadmintonImage} />
          <ClubsCards title="Chess Club" image={ChessImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 py-1 px-20">
          <ClubsCards title="Table Tennis Club" image={TableTennisImage} />
          <ClubsCards title="Yog Club" image={yogaImage} />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 py-1 px-20">
        <ClubsCards title="Dance Club" image={DanceClubImage} />
        <ClubsCards title="Music Club" image={MusicImage} />
        </div>
      </div>
    </div>
    </div>
  );
}
