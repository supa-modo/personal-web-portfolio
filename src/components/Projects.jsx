import React from "react";
import ProjectCarousel from "./ProjectCarousel";

// Import images
import eSokoHome from "../assets/eSoko/eSoko.png";
import Msafiri1 from "../assets/msafiriProject/msafiri1.jpg";
import Msafiri41 from "../assets/msafiriProject/msafiri41.jpg";
import Msafiri6 from "../assets/msafiriProject/msafiri6.jpg";
import Meetings1 from "../assets/meetings/meetings1.png";
import Meetings2 from "../assets/meetings/meetings2.png";
import Meetings3 from "../assets/meetings/meetings3.png";
import Meetings4 from "../assets/meetings/meetings5.png";
import Meetings5 from "../assets/meetings/meetings4.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-yellowgreen text-center mb-6">
        Projects Developed
      </h2>

      {/* Msafiri App Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Msafiri App Project
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          Msafiri App represents a forward-thinking approach to modernizing
          public transportation in Kenya, offering an efficient, user-friendly
          interface, secure payment solutions with QR code scanning, and
          intelligent real-time navigation features.
        </p>
        <ProjectCarousel
          images={[Msafiri1, Msafiri41, Msafiri6]}
          type="smartphone"
        />
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline hover:text-yellow-400"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300 ease-in-out">
            More Details
          </button>
        </div>
      </div>

      {/* Esoko Fashion Store Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Esoko Fashion Store (Still in Development)
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          Esoko leverages the flexibility of JavaScript and React to build
          native mobile applications for both iOS and Android platforms.
        </p>
        <ProjectCarousel
          images={[eSokoHome, Meetings2, Meetings3, Meetings4]}
          type="desktop"
        />
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline hover:text-yellow-600"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            More Details
          </button>
        </div>
      </div>
      {/* Esoko Fashion Store Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          Meeting Attendance and Directory System (Still in Development)
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          Esoko leverages the flexibility of JavaScript and React to build
          native mobile applications for both iOS and Android platforms.
        </p>
        <ProjectCarousel
          images={[Meetings1, Meetings2, Meetings3, Meetings4, Meetings5]}
          type="desktop"
        />
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/meeting-attendance-and-management-app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline hover:text-yellow-600"
          >
            <div className="flex items-center space-x-3">
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </div>
          </a>
          <button className="mt-4 px-10 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
