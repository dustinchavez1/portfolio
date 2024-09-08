import React from "react";
import Image from "next/image";

import winton from "../../public/winton.png";
import josie from "../../public/josie.png"; // Replace with actual file paths
import both from "../../public/both.png"; // Replace with actual file paths

const About = () => {
  return (
    <>
     <div className="pt-10 mt-20 mb-60">
  <h1 className="text-4xl flex justify-center items-center mb-20">About Me</h1>
  <div className="flex flex-col md:flex-row justify-center items-start">
    {/* Images Container */}
    <div className="flex items-start mb-4">
      <Image 
        src={winton} 
        alt="Winston" 
        className="w-full max-w-[150px]" // Responsive width
      />
      <Image 
        src={both} 
        alt="Golf" 
        className="w-full max-w-[150px] mt-5 ml-5" // Responsive width
      />
    </div>

    {/* Text Container */}
    <div className="ml-0 md:ml-10 max-w-md">
      <p className="mb-4 text-xl">
        I am a senior at CSUF studying computer science graduating in May 2024 with an interest in software engineering.
      </p>
      <p className="mb-4 text-xl">
        Outside of programming, I enjoy golfing ⛳ and spending time with my friends and cats 🐈‍
      </p>
    </div>
  </div>
  <hr className="w-2/3 mx-auto" />
</div>

    </>
  );
};

export default About;

