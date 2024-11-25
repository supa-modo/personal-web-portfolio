import React from "react";
import Carousel from ".//ProjectCarousel";
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

      {/* Smartphone Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">Msafiri App</h3>
        <p className="text-lg text-gray-400 mb-6">
          A Flutter-based mobile app offering secure payment solutions and
          real-time navigation.
        </p>
        <Carousel
          images={[Msafiri1, Msafiri41, Msafiri6]}
          displayCount={3} // Display 3 images for smartphones
        />
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/msafiri-app"
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
            See More
          </button>
        </div>
      </div>

      {/* Desktop Project */}
      <div className="mb-16">
        <h3 className="text-2xl text-white font-semibold mb-4">
          eSoko Fashion Store
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          A sleek and modern React-based fashion store interface.
        </p>
        <Carousel
          images={[eSokoHome]} // Single image for desktop
          displayCount={1}
        />
        <div className="font-semibold flex px-20 mt-8 items-center justify-between">
          <a
            href="https://github.com/supa-modo/esoko-fashion-store"
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
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
