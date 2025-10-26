import React, { useEffect } from "react";
import aboutImg from "../assets/images/me1.png";
import resume from "../assets/docs/Resume_Shriwarthan.pdf";
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section id="about" className="py-10 text-white">
      <div
        className="text-center mt-8"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h3 className="text-4xl font-semibold">
          About <span className=" text-cyan-600"></span>
        </h3>
        <p className=" text-gray-400 my-3 text-lg">My Introduction</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className=" p-2">
            <div className=" text-gray-300 my-3 ">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As an undergraduate at the{" "}
                <span className="text-gray-100">
                  Open University of Sri Lanka
                </span>
                , I have developed strong expertise as a full-stack developer,
                focused on building scalable, high-performance web applications.
                With hands-on experience in
                <span className="text-gray-100"> MERN, .NET, and SQL</span>{" "}
                technologies, I’ve successfully designed and implemented
                end-to-end solutions that integrate seamless user experiences
                with robust backend systems. My work reflects a deep commitment
                to writing clean, maintainable code and delivering impactful
                digital products that solve real-world problems.
              </p>

              <br />
              <br />
              <a href={resume}>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          {/* <div className="flex-1 flex justify-center items-center">
            <div className="aboutImg lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
