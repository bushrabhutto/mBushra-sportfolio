import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaBlogger,
  FaQuestionCircle,
  FaHtml5,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Introduction Section */}
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

      {/* Skills Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1324062002/vector/young-woman-is-relaxing-on-comfortable-chair-and-using-laptop-%C3%B0at-is-lying-on-the-ottoman.jpg?s=2048x2048&w=is&k=20&c=odS_p-y64kb_n00s14jl04oCU5Bmlny8Efsj8wcH0Fs="
            alt="Relaxing with laptop"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md hover:scale-105 transition"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold underline flex items-center gap-2 mb-6">
            What I Do <FaQuestionCircle />
          </h1>
          <p className="text-lg leading-relaxed">
            I am a curious learner with an insatiable thirst for knowledge. I enjoy building applications using JavaScript and am currently learning Node.js, MongoDB, and Next.js. I am committed to continual growth in this dynamic field.
          </p>
          <div className="flex gap-6 mt-6 text-4xl">
            <FaHtml5 className="text-orange-600 hover:scale-110 transition" />
            <FaCss3Alt className="text-blue-600 hover:scale-110 transition" />
            <IoLogoJavascript className="text-yellow-500 hover:scale-110 transition" />
            <FaReact className="text-blue-400 hover:scale-110 transition animate-spin" />
            <RiTailwindCssFill className="text-teal-500 hover:scale-110 transition" />
            <FaBootstrap className="text-purple-600 hover:scale-110 transition" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            src="https://seeklogo.com/images/F/fuuast-logo-36D75CB714-seeklogo.com.png"
            alt="Federal Urdu University Logo"
            className="w-32 h-auto hover:scale-110 transition"
          />
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-red-500">
              Federal Urdu University Karachi
            </h3>
            <p className="text-lg">Bachelor of Science in Computer Science (2020 - 2024)</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
