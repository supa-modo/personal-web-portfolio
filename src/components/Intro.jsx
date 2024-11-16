import React from "react";
import bg from "../assets/image2.png";
import { FaBriefcase } from "react-icons/fa";
import Navbar from "./Navbar";

const Intro = () => {
  return (
    <div className="">
      
      <section
        id="intro"
        className="relative h-[calc(100vh-8rem)] max-w-6xl mx-auto overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right center",
        }}
      >
        {/* Intro Content */}
        <div className="flex flex-col justify-center h-full p-6">
          {/* Welcome Message */}
          <span className="text-3xl text-white font-light">
            Hello, <br /> Welcome to my portfolio
          </span>

          {/* Intro Text */}
          <div className="flex flex-col mt-8 text-5xl text-white font-bold space-y-5">
            <span>
              I'm{" "}
              <span className="text-yellowgreen">Eddy Ochieng Odhiambo</span>
            </span>
            <span>A Software Developer</span>
          </div>

          {/* Intro Description */}
          <p className="mt-7 text-lg max-w-[70%] font-light text-white leading-6">
            I am a skilled developer with experience in creating visually
            appealing and user-friendly software and applications. I combine
            creativity and technical skills to bring ideas to life. <br />{" "}
            Explore my portfolio to witness the synergy of my skills in action.
            Whether you're seeking a mobile app, a web solution, or a
            combination of both, I am excited about the opportunity to <br />{" "}
            bring your vision to life.
          </p>

          {/* Hire Me Button */}
          <div
            className="mt-10 px-6 py-3 text-center cursor-pointer bg-white max-w-48 rounded-full shadow-md hover:shadow-lg transition"
            onClick={() => {
              document
                .getElementById("contacts")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="flex items-center mx-4 text-gray-800 space-x-3">
              <FaBriefcase size={23} />
              <span className="text-lg  font-semibold">Hire me</span>
            </div>
          </div>

          {/* Closing Message */}
          <span className="mt-4 text-lg text-white font-medium">
            Let's build something extraordinary together!
          </span>
        </div>
      </section>
    </div>
  );
};

export default Intro;
