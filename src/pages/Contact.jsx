import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6 text-lg">
          I am very passionate about working on interactive and dynamic mobile and web applications. Let’s collaborate to create something amazing!
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://wa.me/923402563206"
            className="text-green-500 hover:text-white hover:scale-110 transition duration-300"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            href="mailto:ghous.shah91@gmail.com"
            className="text-red-500 hover:text-white hover:scale-110 transition duration-300"
            aria-label="Email"
          >
            <SiGmail className="text-3xl" />
          </a>
          <a
            href="https://github.com"
            className="text-gray-700 hover:text-white hover:scale-110 transition duration-300"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-500 hover:text-white hover:scale-110 transition duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>

        <div className="mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12h6m-6 0a4 4 0 11-8 0 4 4 0 018 0zm2-6H6m6 0a4 4 0 110 8 4 4 0 010-8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
