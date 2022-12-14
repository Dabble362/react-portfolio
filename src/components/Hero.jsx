import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#BFB69E]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1>Daniel Bennett</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio earum
          sit deserunt voluptatibus rem! Voluptas, asperiores officia eius,
          tempore consectetur a iure aliquid nesciunt itaque in error vel
          sapiente blanditiis.
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
