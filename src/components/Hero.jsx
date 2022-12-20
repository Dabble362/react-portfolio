import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#BFB69E]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8B250F]">Hi, my name is</p>
        <h1 className="tex-4xl sm:text-7xl font-bold text-[#1F7A8C]">
          Daniel Bennett
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fef9ef]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#fef9ef] py-4 max-w-[700px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio earum
          sit deserunt voluptatibus rem! Voluptas, asperiores officia eius,
          tempore consectetur a iure aliquid nesciunt itaque in error vel
          sapiente blanditiis.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8B250F] hover:border-[#8B250F]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
