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
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-4 gap-2 lg:gap-20">
        {classes.map((cls) => (
          <GradeDivision key={cls.number} number={cls.number}/>

        ))}
      </div>
    </div>
  );
}
