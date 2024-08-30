"use client"
import React, { useState } from 'react';

const experiences = [
    {
        id: 1,
        role: "Software Developer",
        date: "July 2023 - July 2024",
        name: 'Corproexta',
        description: [
            "Engineered a full stack dashboard using the MEVN stack (MongoDB, Express, Vue.js, Node.js) to automate order tracking for 2000 trucking deliveries monthly",
            "Developed mobile app functionalities, allowing real-time updates and data visualization to the dashboard",
            "Implemented a notification system to alert warehouse managers of key events",
            "Created role-based authorization panels using JWT, enabling different permissions for various user roles",
            "Implemented functionality to generate and save new client information as unique codes, streamlining client management and improving data organization"

        ]
    },
    {
        id: 2,
        role: "Undergraduate Research Assistant",
        date: "May 2023 - July 2023",
        name: 'CIC | PCUBED CSUF',
        description: [
            "Conducted research on stock market trading strategy pairs trading by extracting stock data from Yahoo Finance and developing a C++ program to determine if two stocks are viable for pairs trading using statistical methods",
            "Contributed to research reports and presentations, communicating findings and insights to both technical and non-technical audiences."
        ]
    },
    
    // Add more experiences as needed
];

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]); // Start with the first experience selected

    return (
        <>

        <div className="mx-10 my-10 mt-40 mb-60">
            <h2 className="text-4xl text-center mb-10">Experience</h2>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-1/4">
                    <ul className="list-none">
                        {experiences.map((experience) => (
                            <li
                                key={experience.id}
                                className={`cursor-pointer p-2 ${selectedExperience.id === experience.id ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-200'}`}
                                onClick={() => setSelectedExperience(experience)}
                            >
                                {experience.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/4 md:pl-10">
                    <h3 className="text-xl font-bold mb-2">{selectedExperience.role} @ {selectedExperience.name}</h3>
                    <p className="mb-4">{selectedExperience.date}</p>
                    <ul className="list-none space-y-2">
                        {selectedExperience.description.map((detail, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <span className="text-blue-600 text-lg leading-none mr-2">•</span>
                                <p>{detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <hr className=" w-2/3 mx-auto"></hr>  
        </>
    );
};

export default Experience;