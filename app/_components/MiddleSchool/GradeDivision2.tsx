// pages/index.js
import GradeDivision from "./GradeDivision";

export default function GradeDivision2() {
  const classes = [
    { number: "V", },
    { number: "VI", },
    { number: "VII", },
    { number: "VIII", },
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
