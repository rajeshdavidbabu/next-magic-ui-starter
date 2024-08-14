import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const HeroHighlight = () => {
  const words = "Digitální transformace ve zdravotnictví začíná zde";

  return (
    <div className="h-[40rem] w-full bg-primary-faintest flex items-center justify-center">
      <div className="text-4xl sm:text-7xl font-bold text-primary font-space text-center">
        <TextGenerateEffect words={words} threshold={0.5} />
      </div>
    </div>
  );
};

export default HeroHighlight;