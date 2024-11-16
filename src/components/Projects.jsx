import React from "react";
import Portfolio1 from "../assets/portfolio-1.png";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.png";

import eSokoHome from "../assets/eSoko/eSoko.png";
import Msafiri1 from "../assets/msafiriProject/msafiri1.jpg";
import Msafiri41 from "../assets/msafiriProject/msafiri41.jpg";
import Msafiri6 from "../assets/msafiriProject/msafiri6.jpg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-yellowgreen text-center mb-6">
        Projects Developed
      </h2>

      {/* Project 1 */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Meeting Attendance and Management Website
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both iOS
          and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={Portfolio1}
            alt="Portfolio 1"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
          <img
            src={Portfolio2}
            alt="Portfolio 2"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
          <img
            src={Portfolio3}
            alt="Portfolio 3"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 underline hover:text-yellow-400"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            See More
          </button>
        </div>
      </div>

      {/* Msafiri App Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Msafiri App Project
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          Msafiri App represents a forward-thinking approach to modernizing
          public transportation in Kenya, offering an efficient, user-friendly
          interface, secure payment solutions with QR code scanning, and
          intelligent real-time navigation features. This innovative
          Flutter-based mobile application seamlessly integrates mobile
          transactions for public transport fare payments, introducing a
          hassle-free and efficient method for commuters.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src={Msafiri1}
            alt="Msafiri 1"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
          <img
            src={Msafiri41}
            alt="Msafiri 4"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
          <img
            src={Msafiri6}
            alt="Msafiri 6"
            className="w-64 h-48 object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 underline hover:text-yellow-400"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            See More
          </button>
        </div>
      </div>

      {/* Esoko Fashion Store Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Esoko Fashion Store (Still in Development)
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both iOS
          and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.
        </p>
        <div className="flex justify-center mb-6">
          <img
            src={eSokoHome}
            alt="Esoko Fashion Store"
            className="w-80 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 underline hover:text-yellow-400"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            See More
          </button>
        </div>
      </div>

      {/* More Projects Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-yellowgreen font-semibold text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
          More Project Works
        </button>
      </div>
    </section>
  );
};

export default Projects;
