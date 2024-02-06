import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-4/5 mx-auto mt-3 h-20 bg-lblue top-0 rounded-xl font-mono">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-center items-center h-full">
            <ul className="hidden md:flex gap-x-20 mr-10 text-nearwhite text-2xl">
            <li>
                <Link className="text-white-500 hover:text-orange-300" href="#about">
                    About Me
                </Link>
              </li>
            <li>
                <Link className="text-white-500 hover:text-orange-300" href="#experience">
                    Experience
                </Link>
              </li>
              <li>
                <Link className="text-white-500 hover:text-orange-300" href="#projects">
                    Projects
                </Link>
              </li>
              
              <li>
                <Link className="text-white-500 hover:text-orange-300" href="#contact">
                    Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
