import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <div className="object-contain ">
          <h1 className="text-8xl">🚀</h1>
        </div>
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          List Of The <span className="red-gradient">Most Popular anime</span> Among Wibu
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
