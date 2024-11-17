import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Frontend Developer",
      timeline: "Jan 2022 - Present",
      summary:
        "Designed and implemented user-centric web interfaces with React.js, boosting user engagement by 35%. Collaborated with a cross-functional team to integrate RESTful APIs and optimize performance for mobile devices.",
    },
    {
      company: "African Court on Human and People's Rights",
      role: "Software Engineer Intern",
      timeline: "May 2021 - Dec 2021",
      summary:
        "Contributed to the development of a knowledge management system using Vue.js and PHP, enhancing document retrieval efficiency by 25%. Automated testing processes, reducing QA time by 15%.",
    },
    {
      company: "East African Community Secretariat",
      role: "IT Support Intern",
      timeline: "Aug 2020 - Apr 2021",
      summary:
        "Provided technical support to 100+ employees, resolving hardware and software issues promptly. Assisted in the deployment of a secure intranet system for file sharing and communication.",
    },
  ];

  return (
    <section id="work-experience" className="my-10 py-20">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-semibold text-yellowgreen text-center mb-8">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-yellow-500 text-sm mb-4">{exp.timeline}</p>
              <p className="text-gray-400">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
