import React from "react";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills" className="text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-yellowgreen">What I Do</h2>
        <p className="text-lg font-light mt-4 text-gray-300">
          I'm a passionate and versatile Full Stack Software Developer with
          expertise in Web Development using the MERN stack with options of SQL
          Server, PostgreSQL or Fastify. I also develop mobile applications
          through the Flutter framework & Node.js with Express on the backend
          and build Desktop Applications with C#. My journey in programming
          started with a curiosity-driven exploration of website development,
          evolving into a thrilling adventure encompassing mobile app
          development, CI/CD operations through platforms like Azure and
          Software Interface Design.
        </p>
      </div>

      {/* Skills Cards */}
      <div className="flex flex-col gap-8 mt-12 max-w-5xl mx-auto px-6">
        {/* Web Design */}
        <div className="flex items-center space-x-5 bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
          <img
            src={WebDesign}
            alt="Web Design"
            className="h-20 w-20 object-contain mb-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Web Design and Development (MERN, SQL Server, PostgreSQL)
            </h3>
            <p className="text-base font-light text-gray-300 mt-3">
              With a keen eye for design and a mastery of web technologies, I
              bring websites to life by blending aesthetics and functionality.
              From front-end to back-end, I create captivating and optimized web
              solutions. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos nesciunt eligendi, tenetur impedit harum quo nihil
              ullam eum omnis laboriosam quas possimus, quod in quam debitis
              ratione, dicta excepturi maxime!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
          <img
            src={AppDesign}
            alt="App Development"
            className="h-20 w-20 object-contain mb-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Mobile App Development
            </h3>
            <p className="text-base font-light text-gray-300 mt-3">
              With a keen eye for design and a mastery of web technologies, I
              bring websites to life by blending aesthetics and functionality.
              From front-end to back-end, I create captivating and optimized web
              solutions. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos nesciunt eligendi, tenetur impedit harum quo nihil
              ullam eum omnis laboriosam quas possimus, quod in quam debitis
              ratione, dicta excepturi maxime!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
          <img
            src={UIDesign}
            alt="UI/UX Design"
            className="h-20 w-20 object-contain mb-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              UI/UX Design
            </h3>
            <p className="text-base font-light text-gray-300 mt-3">
              Crafting intuitive and visually engaging user interfaces is my
              specialty. I focus on delivering designs that prioritize
              usability, accessibility, and creating impactful user journeys.
              adipisicing elit. Quos nesciunt eligendi, tenetur impedit harum
              quo nihil ullam eum omnis laboriosam quas possimus, quod in quam
              debitis ratione, dicta excepturi maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
