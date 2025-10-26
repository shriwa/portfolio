import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  });
  const skills = [
    // Programming Languages
    { logo: "devicon-java-plain", name: "Java", type: "Programming Languages" },
    {
      logo: "devicon-python-plain",
      name: "Python",
      type: "Programming Languages",
    },
    { logo: "devicon-csharp-plain", name: "C#", type: "Programming Languages" },

    // Front End
    { logo: "devicon-javascript-plain", name: "JavaScript", type: "Front End" },
    { logo: "devicon-typescript-plain", name: "TypeScript", type: "Front End" },
    { logo: "devicon-react-original", name: "React.js", type: "Front End" },
    { logo: "devicon-angularjs-plain", name: "Angular", type: "Front End" },
    { logo: "devicon-nextjs-plain", name: "Next.js", type: "Front End" },
    { logo: "devicon-blazor-original", name: "Blazor", type: "Front End" },
    {
      logo: "devicon-tailwindcss-original",
      name: "Tailwind CSS",
      type: "Front End",
    },
    { logo: "devicon-bootstrap-plain", name: "Bootstrap", type: "Front End" },

    // Back End
    { logo: "devicon-dotnetcore-plain", name: ".NET", type: "Back End" },
    {
      logo: "devicon-nodejs-plain-wordmark",
      name: "Node.js",
      type: "Back End",
    },
    { logo: "devicon-php-plain", name: "PHP", type: "Back End" },
    { logo: "devicon-express-original", name: "Express JS", type: "Back End" },

    // Cloud Services
    { logo: "devicon-azure-plain", name: "Azure", type: "Cloud Services" },
    {
      logo: "devicon-firebase-plain",
      name: "Firebase",
      type: "Cloud Services",
    },

    // Mobile App Development
    {
      logo: "devicon-android-plain",
      name: "Android (Java)",
      type: "Mobile App Development",
    },
    {
      logo: "devicon-react-original",
      name: "React Native",
      type: "Mobile App Development",
    },

    // Databases
    { logo: "devicon-mysql-plain", name: "MySQL", type: "Databases" },
    {
      logo: "devicon-microsoftsqlserver-plain",
      name: "MS SQL Server",
      type: "Databases",
    },
    { logo: "devicon-mongodb-plain", name: "MongoDB", type: "Databases" },
    { logo: "devicon-oracle-original", name: "Oracle", type: "Databases" },

    // Version Control
    { logo: "devicon-git-plain", name: "Git", type: "Version Control" },
    {
      logo: "devicon-github-original",
      name: "GitHub",
      type: "Version Control",
    },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) acc[skill.type] = [];
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="py-10 bg-gray-800 relative"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>

        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <SwiperSlide key={index}>
              <div className="skills-container h-auto">
                <h2 className="text-2xl font-semibold mt-6 text-cyan-400">
                  {category}
                </h2>
                <div className="flex items-center justify-center mt-12 mb-20 gap-5 flex-wrap">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="border-2 border-cyan-600 relative w-28 h-28 bg-gray-900 rounded-2xl flex flex-col items-center justify-center hover:text-cyan-400 hover:scale-105 transition-all duration-300"
                    >
                      <i className={`${skill.logo} text-4xl`}></i>
                      <p className="text-sm mt-3">{skill.name}</p>
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
