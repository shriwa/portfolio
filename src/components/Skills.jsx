import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      name: "HTML",
      type: "Web Development",
    },
    {
      logo: "logo-css3",
      name: "CSS",
      type: "Web Development",
    },
    {
      logo: "logo-tailwind",
      name: "Tailwind",
      type: "Web Development",
    },
    {
      logo: "logo-bootstrap",
      name: "Bootstrap",
      type: "Web Development",
    },
    {
      logo: "logo-javascript",
      name: "JavaScript",
      type: "Web Development",
    },
    {
      logo: "logo-nodejs",
      name: "Node JS",
      type: "Web Development",
    },
    {
      logo: "logo-react",
      name: "React JS",
      type: "Web Development",
    },
    {
      logo: "logo-java",
      name: "Java",
      type: "Programming Language",
    },
    {
      logo: "logo-python",
      name: "Python",
      type: "Programming Language",
    },
    {
      logo: "logo-csharp",
      name: "C#",
      type: "Programming Language",
    },
    {
      logo: "logo-r",
      name: "R",
      type: "Programming Language",
    },
    {
      logo: "logo-php",
      name: "PHP",
      type: "Web Development",
    },
    {
      logo: "logo-react",
      name: "ASP.NET",
      type: "Web Development",
    },
    {
      logo: "logo-react",
      name: "REST API",
      type: "Web Development",
    },
    {
      logo: "logo-react",
      name: "React Native",
      type: "Mobile Development",
    },
    {
      logo: "logo-react",
      name: "Android (Java)",
      type: "Mobile Development",
    },
    {
      logo: "logo-sql",
      name: "SQL",
      type: "Database",
    },
    {
      logo: "logo-mongodb",
      name: "MongoDB",
      type: "Database",
    },
    {
      logo: "logo-microsoftsqlserver",
      name: "MS SQL Server",
      type: "Database",
    },
    {
      logo: "logo-oracle",
      name: "Oracle",
      type: "Database",
    },
    {
      logo: "logo-github",
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

        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="skills-container">
            <h2 className="text-2xl font-semibold mt-6 ">
              <span>{category}</span>
            </h2>
            <div className="flex items-center justify-center mt-12 mb-20 gap-5 flex-wrap">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="border-2 border-cyan-600 relative min-w-[12rem] max-w-[16rem] bg-gray-900 p-10 rounded-3xl"
                >
                  <div className="text-6xl w-15 h-15 bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                  <p className="text-xl mt-3">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
