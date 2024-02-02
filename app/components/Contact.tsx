import React from "react";
import Image from 'next/image';
import email from "../../public/email.jpeg";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";

const Contact = () => {
    return (
        <>
          <div className="text-center mt-20 mb-10">
            <h1 className="text-4xl">Contact Me</h1>
          </div>
          <div className="text-center flex justify-center  pb-20 space-x-10"> 
            <a href="mailto:dnicholas1002@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={email} width={50} height={50} alt="Email Address" />
            </a>
            <a href="https://github.com/dustinchavez1" target="_blank" rel="noopener noreferrer">
              <Image src={github} width={50} height={50} alt="GitHub Profile" />
            </a>
            <a href="https://www.linkedin.com/in/dustin-chavez-935831244/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} width={50} height={50} alt="LinkedIn Profile" />
            </a>
          </div>
        </>
      );                                          
};

export default Contact;
