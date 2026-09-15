"use client";

interface InfiniteSliderProps {
  data: string[][];
  side: "left" | "right";
}

export default function InfiniteSlider({ data, side }: InfiniteSliderProps) {
  return (
    <div className="flex justify-start gap-0 mt-12 overflow-hidden relative">
      {data.map((logos, index) => (
        <div
          key={index}
          className={`flex items-center gap-0 relative w-fit ${
            side === "left"
              ? index === 0
                ? "animate-[slidingLeft_20s_linear_infinite]"
                : "animate-[slidingLeft2_20s_linear_infinite]"
              : index === 0
                ? "animate-[slidingRight_20s_linear_infinite]"
                : "animate-[slidingRight2_20s_linear_infinite]"
          }`}
          style={{
            animationDelay: index === 0 ? "-20s" : "-10s",
          }}
        >
          {logos.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="h-[100px] mx-12 object-cover w-fit grayscale hover:grayscale-0 transition-all duration-500"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
