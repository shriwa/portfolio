import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Skills = () => {
  const skills = [
    {
      logo: "devicon-html5-plain",
      name: "HTML",
      type: "Web Development",
    },
    {
      logo: "programming lang-css",
      name: "CSS",
      type: "Web Development",
    },
    {
      logo: "devicon-tailwindcss-original",
      name: "Tailwind",
      type: "Web Development",
    },
    {
      logo: "devicon-bootstrap-plain",
      name: "Bootstrap",
      type: "Web Development",
    },
    {
      logo: "devicon-javascript-plain",
      name: "JavaScript",
      type: "Web Development",
    },
    {
      logo: "devicon-nodejs-plain-wordmark",
      name: "Node JS",
      type: "Web Development",
    },
    {
      logo: "devicon-react-original",
      name: "React JS",
      type: "Web Development",
    },
    {
      logo: "devicon-java-plain",
      name: "Java",
      type: "Programming Language",
    },
    {
      logo: "devicon-python-plain",
      name: "Python",
      type: "Programming Language",
    },
    {
      logo: "devicon-csharp-plain",
      name: "C#",
      type: "Programming Language",
    },
    {
      logo: "devicon-r-plain",
      name: "R",
      type: "Programming Language",
    },
    {
      logo: "devicon-php-plain",
      name: "PHP",
      type: "Web Development",
    },
    {
      logo: "devicon-dot-net-plain",
      name: "ASP.NET",
      type: "Web Development",
    },
    {
      logo: "devicon-react-original",
      name: "React Native",
      type: "Mobile Development",
    },
    {
      logo: "devicon-android-plain",
      name: "Android (Java)",
      type: "Mobile Development",
    },
    {
      logo: "devicon-azuresqldatabase-plain",
      name: "SQL",
      type: "Database",
    },
    {
      logo: "devicon-mongodb-plain",
      name: "MongoDB",
      type: "Database",
    },
    {
      logo: "devicon-microsoftsqlserver-plain",
      name: "MS SQL Server",
      type: "Database",
    },
    {
      logo: "devicon-oracle-original",
      name: "Oracle",
      type: "Database",
    },
    {
      logo: "devicon-github-original",
      name: "Git & GitHub",
      type: "Version Control",
    },
  ];

  // Group skills by type
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <SwiperSlide key={index}>
              <div className="skills-container">
                <h2 className="text-2xl font-semibold mt-6 ">
                  <span>{category}</span>
                </h2>
                <div className="flex items-center justify-center mt-12 mb-20 gap-5 flex-wrap">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="border-2 border-cyan-600 relative w-20 h-20 bg-gray-900 p-14 rounded-3xl flex flex-col items-center justify-center hover:text-cyan-600"
                    >
                      <i className={skill.logo} style={{ fontSize: 30 }}></i>
                      <div className="text-6xl w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                        <p className=" text-sm mt-3">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
