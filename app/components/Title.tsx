import React from "react";
import Image from "next/image";

import headshot from "../../public/headshot.png";
const Title = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40 mb-60 text-center">
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <h1 className="text-6xl">Dustin Chavez</h1>
            <h2 className="text-4xl mt-5">CSUF &apos;24 | Software Engineer</h2>

            <a
              href="https://drive.google.com/file/d/1OIuZLpFbGBt05edMM11VXFjJb5DB2nuI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-blue-500 text-white text-lg px-6 py-3 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              My resume
            </a>
          </div>
          {/* Headshot Image */}
          
          <Image src={headshot} alt="Winston" className="md:ml-10 mt-10 md:mt-0 w-48 h-48 rounded-full"  />
        </div>
      </div>
      <hr className="w-2/3 mx-auto"></hr>
    </>
  );
};

export default Title;

