"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatisticsCard({
  description,
  number,
}: {
  number: string;
  description: string;
}): ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const endNum = Number(number);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3 justify-center items-center font-semibold"
    >
      {isVisible && (
        <>
          <div className="text-3xl lg:text-4xl">
            <CountUp end={endNum} duration={5} delay={1} />
          </div>
          <div className="text-2xl lg:text-4xl">{description}</div>
        </>
      )}
    </div>
  );
}
