import React from "react";

const Projects = () => {
    return(
        <>
            {/* Include the <style> tag within the return statement */}
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .blinking {
                    animation: blink 1.5s linear infinite;
                }
            `}</style>

            <div className="flex flex-col items-center justify-center mt-40 mb-60">
                <h2 className="text-4xl text-center mb-20">Projects</h2>
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl blinking">Coming Soon<span className="blinking">...</span></h1>
                </div>
            </div>
            <hr className="w-2/3 mx-auto" />
        </>
    )
}

export default Projects;
