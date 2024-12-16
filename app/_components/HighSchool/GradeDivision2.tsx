// pages/index.js
import GradeDivision from "./GradeDivision";

export default function GradeDivision2() {
  const classes = [
    { number: "Four", },
    { number: "Five", },
    { number: "Six", },
    { number: "Seven", },
    { number: "Eight", },
    { number: "Nine", },
    { number: "Ten", },
    { number: "Eleven", },
    { number: "Twelve", }
  ];

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-5 gap-2 lg:gap-20">
        {classes.map((cls) => (
          <GradeDivision key={cls.number} number={cls.number}/>
        ))}
      </div>
    </div>
  );
}
