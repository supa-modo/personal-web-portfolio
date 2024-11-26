import React from "react";
import experiences from "../data/Experiences.json";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="my-10 py-20 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-green-600 text-center mb-8">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex relative   px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-gray-900 bg-opacity-50 py-3"
            >
              {/* Green Line */}
              <div className="absolute left-0 top-0 h-full w-2 bg-green-600"></div>
              {/* Experience Details */}
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  <span className="text-gray-400">{exp.role}</span> -{" "}
                  {exp.company}
                </h3>
                <p className="text-yellow-600 text-sm mb-4">{exp.timeline}</p>
                <p className="text-gray-500">{exp.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
