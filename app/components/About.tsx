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
        <div className="flex justify-center items-start">
          {/* Images Container */}
          <div className="flex items-start"> {/* Align items to start */}
            <div className="mb-4 "> {/* More margin-left for the top image */}
              <Image src={winton} alt="Winston" width={135} height={135} />
              <Image src={both} alt="Golf" width={135} height={135} className="mt-5 ml-40"/>


            </div>
            
            <div className="ml-10"> {/* No additional margin-left for the bottom image */}
            <Image src={josie} alt="Another Cat" width={135} height={135} />
            </div>
          </div>

          {/* Text Container */}
          <div className="max-w-md ml-10"> {/* Adjust spacing as needed */}
            <p className="mb-4 text-xl">
              I am a senior at CSUF studying computer science graduating in May 2024 with an interest in software engineering
            </p>
            <p className="mb-4 text-xl" >
              Outside of programming, I enjoy golfing ⛳ and spending time with my friends and cats 🐈‍ 
            </p>
          </div>
        </div>
      </div>
      <hr className="w-2/3 mx-auto" />
    </>
  );
};

export default About;

