import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#232c2f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF894C]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1F7A8C]">
          Daniel Bennett
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fef9ef]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#fef9ef] py-4 max-w-[700px]">
          Whether you are an individual looking for a web presence, an
          organization providing a service, or anything in between, I will use
          my front-end and back-end knowledge to deliver your product.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1F7A8C] hover:border-[#1F7A8C]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
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
