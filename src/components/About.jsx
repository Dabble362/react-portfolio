import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#BFB69E] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#8B250F]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Daniel, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              soluta nesciunt. Vitae, modi impedit praesentium nesciunt in
              ratione fugit illum aspernatur similique minima vel reprehenderit
              quam, dignissimos autem commodi rem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
