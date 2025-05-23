// pages/index.js
import GradeDivision from "./GradeDivision";

export default function GradeDivision2() {
  const classes = [
    { number: "Nursery", },
    { number: "L.K.G", },
    { number: "U.K.G", },
    { number: "One", },
    { number: "Two", },
    { number: "Three", },
  ];

  return (
    <div className="flex items-center justify-center mt-10 w-full h-full">
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        {classes.map((cls) => (
          <GradeDivision key={cls.number} number={cls.number}/>
        ))}
      </div>
    </div>
  );
}
