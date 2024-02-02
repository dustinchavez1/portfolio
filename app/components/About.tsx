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
            <p className="mb-4">
              I am a senior at CSUF graduating in May 2024 who started programming in college.
            </p>
            <p>
              I'm a big fan of my two cats, Winston and Josie – they're a huge part of my life. 
              I've also recently gotten into golfing and I'm really enjoying it so far.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-2/3 mx-auto" />
    </>
  );
};

export default About;

