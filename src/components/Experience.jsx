import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section
      id="experience"
      className="py-10 text-white"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Professional Background</p>

        <div className="flex flex-col items-center px-10 max-w-4xl mx-auto">
          <div className="p-4 text-gray-300 bg-gray-800/30 rounded-2xl shadow-md w-full">
            <h4 className="text-2xl font-semibold text-cyan-500 mb-2">
              .NET Developer Intern
            </h4>
            <p className="text-lg text-gray-100 mb-1">
              ASN IT (Pvt) Ltd – Kandy, Sri Lanka
            </p>
            <p className="text-sm text-gray-400 mb-4">March 2025 – Present</p>

            <ul className="list-disc  text-justify leading-7 space-y-2">
              <li>Developed RESTful APIs using ASP.NET Web API.</li>
              <li>
                Designed and implemented database systems to support application
                features.
              </li>
              <li>
                Built front-end interfaces using Blazor with MudBlazor
                components.
              </li>
              <li>
                Collaborated with the software development team to deliver
                functional modules in a timely manner.
              </li>
              <li>
                Gained hands-on experience in full-stack development within a
                professional environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
