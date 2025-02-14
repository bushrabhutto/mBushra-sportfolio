import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaBlogger,
  FaHtml5,
  FaReact,

  
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import certificateImage from "../assets/download.png";
import CIt from "../assets/citFullcourse.jpg";
import mern from "../assets/mern stack.jpg";
import resumePDF from "../assets/My Resume.pdf";

const Home = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        Explore my journey, projects, skills, certifications, and more. Dive into the world of web development with me!
      </p>
      <div className="flex gap-4 text-3xl">
        <a href="https://github.com/bushrabhutto" className="text-gray-700 hover:text-black hover:scale-110 transition">
          <FaGithub />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 hover:scale-110 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:bushra.bhutto246@gmail.com" className="text-red-500 hover:text-red-700 hover:scale-110 transition">
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300">
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 animate-bounce">
            Hi, I am Bushra 👋
          </h1>
          <p className="text-lg leading-relaxed">
            A passionate JavaScript developer eager to build web and mobile applications. I am a BSCS student, currently learning Node.js and JavaScript libraries such as React.js, Next.js, and other frameworks. I am always excited to explore new technologies and enhance my skill set.
          </p>
          <div className="flex gap-4 mt-6 text-3xl">
            <a href="#" className="text-gray-700 hover:text-black hover:scale-110 transition">
              <FaGithub />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:bushra.bhutto246@gmail.com" className="text-red-500 hover:text-red-700 hover:scale-110 transition">
              <SiGmail />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700 hover:scale-110 transition">
              <FaBlogger />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1168361545/vector/young-woman-works-at-the-laptop-surrounded-with-books.jpg?s=2048x2048&w=is&k=20&c=79VXfkWNnsIcjHRSLREEEad_svVi-y1aBCcRW0y4JPg="
            alt="Working on laptop"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md hover:scale-105 transition"
          />
        </div>
      </section>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600 w-12 h-12" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600 w-12 h-12" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-yellow-500 w-12 h-12" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400 w-12 h-12" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-teal-500 w-12 h-12" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition transform"
          >
            {skill.icon}
            <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Certificate = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      description: "Completed 6 months of Full Stack Web Development course.",
      image: certificateImage,
    },
    {
      title: "CIT Course certificate",
      description: "Certificate in Information Technology learned office automation hardware concepts vb.net",
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

const Contact = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
          <form action="" id="contactForm" className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="contact-name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="contact-email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Home, About, Skills, Certificate, Resume, Contact };
