import React from "react";
import certificateImage from "../assets/download.png";
import CIt from "../assets/citFullcourse.jpg";
import mern from "../assets/mern stack.jpg";

const Certificate = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      description: "Completed 6 months of Full Stack Web Development course.",
      image: certificateImage,
    },
    {
      title: "CIT Course certificate",
      description: "Certificate in Information Technology learned office automation hardware concets vb.net",
      image: CIt,
    },
    {
      title: "MERN Stack",
      description: "Completed MERN stack, learned JavaScript, React.js, and more.",
      image: mern,
    },
  ];

  const handleViewInNewTab = (image) => {
    window.open(image, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
              <button
                onClick={() => handleViewInNewTab(cert.image)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
