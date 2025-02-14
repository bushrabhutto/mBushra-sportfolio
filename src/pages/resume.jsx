import React from "react";
import resumePDF from "../assets/My Resume.pdf"; 

const Resume = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Resume</h2>
      <div className="flex justify-center">
   
        <iframe
          src={resumePDF}
          title="Bushra Bhutto's Resume"
          className="w-full h-[500px] md:w-3/4 md:h-[700px] shadow-lg border rounded-lg"
        ></iframe>
      </div>
      <div className="text-center mt-6">
       
        <a
          href={resumePDF}
          download="Bushra_Bhutto_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
