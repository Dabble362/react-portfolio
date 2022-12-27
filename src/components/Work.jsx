import React from "react";
import workImg from "../assets/workImg.png";
import workImg2 from "../assets/workImg2.png";
import workImg3 from "../assets/workImg3.png";

const Work = () => {
  return (
    <div name="work" className="bg-[#232c2f] w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-l-4 text-gray-300 pl-2 border-[#FF894C]">
            Work
          </p>
          <p className="py-6">Here are some of my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Recipe App
              </span>
              <div className="pt-8 text-center">
                <a href="https://mazel.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dabble362/Mazel">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Journal App
              </span>
              <div className="pt-8 text-center">
                <a href="https://thesquishapp.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Dabble362/SQUISH">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workImg3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center item-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="flex flex-col justify-center opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Recipe App
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.hornhollow.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold ">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
