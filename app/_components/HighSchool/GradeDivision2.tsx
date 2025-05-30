// pages/index.js
import GradeDivision from "./GradeDivision";

export default function GradeDivision2() {
  const classes = [
    { number: "Nine", },
    { number: "Ten", },
    { number: "Eleven", },
    { number: "Twelve", }
  ];

  return (
    <div className="flex items-center justify-center mt-10 2xl:mx-24 ">
      <div className="flex flex-row flex-wrap justify-center items-center gap-10">
        {classes.map((cls) => (
          <GradeDivision key={cls.number} number={cls.number}/>
        ))}
      </div>
    </div>
  );
}
