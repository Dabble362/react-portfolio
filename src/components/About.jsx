import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#232c2f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-l-4 pl-2 border-[#FF894C]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello there. I'm Daniel. Please have a look around.</p>
          </div>
          <div>
            <p>
              My background in the restaurant industry made me aware of my
              passion for improving processes, systems, and tasks to elevate the
              quality of life for my co-workers and clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
