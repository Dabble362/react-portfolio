import React from "react";

import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import HTML from "../assets/html.png";
import GitHub from "../assets/github.png";
import CSS from "../assets/css.png";
import MongoDB from "../assets/mongo.png";
import ReactImg from "../assets/react.png";
import TailWindCSS from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#232c2f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-l-4 pl-2 border-[#FF894C]">
            Skills
          </p>
          <p className="py-4">Here are some technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
            <p className="my-4">React</p>
          </div>
          <div className="pt-6 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TailWindCSS}
              alt="TailWindCSS icon"
            />
            <p className="my-4">TailWindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
