import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className=" text-cyan-600"></span>
        </h3>
        <p className=" text-gray-400 my-3 text-lg">My Introduction</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className=" p-2">
            <div className=" text-gray-300 my-3 ">
              <p className=" text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur quo obcaecati sapiente aperiam reprehenderit consequatur
                ipsum, cupiditate, porro autem, nostrum nobis optio odit. Alias
                illum nulla at sequi nihil. Earum, quidem eius. Aperiam amet
                voluptates cupiditate, facere corrupti explicabo iusto laborum
                facilis at illo quis maxime neque libero et voluptatum.
              </p>
              <br />
              <br />
              <a href="./src/assets/Resume_Shriwarthan.pdf" download>
                <button className="btn-primary  "> Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="aboutImg lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
