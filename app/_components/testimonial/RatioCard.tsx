"use client";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function RatioCard({
  ratio1,
  ratio2,
  description,
  className,
}: {
  description: string;
  className?: string;
  ratio1?: string;
  ratio2?: string;
}): ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const endNum1 = Number(ratio1);
  const endNum2 = Number(ratio2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-3 justify-center items-center font-semibold">
      {isVisible && (
        <>
          <div className={`${className} text-3xl lg:text-4xl`}>
            <span>
              <CountUp end={endNum1} duration={5} delay={1} />
            </span>
            :
            <span>
              <CountUp end={endNum2} duration={5} delay={1} />
            </span>
          </div>
          <div className="text-2xl lg:text-4xl">{description}</div>
        </>
      )}
    </div>
  );
}
