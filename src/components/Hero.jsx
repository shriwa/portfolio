import React from "react";
import hero from "../assets/images/my_ai_1.png";

const Hero = () => {
  const social_media = [
    { logo: "mail", link: "mailto:shriwarthan59@gmail.com" },
    { logo: "logo-instagram", link: "https://www.instagram.com/_shriwa_/" },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/shriwarthan-vigneshwaran-27816a21b/",
    },
    { logo: "logo-github", link: "https://github.com/shriwa" },
    { logo: "logo-whatsapp", link: "https://wa.me/+94767722381" },
  ];

  return (
    <div
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className=" md:w-7/12 h-full object-cover" />
      </div>
      <div className="flex-1 ">
        <div className=" md:text-left text-center">
          <h1 className=" md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className=" text-cyan-600 md:text-4xl text-3xl animate-pulse">
              Hello World ;
              <br />
            </span>
            I'm = <span>"Shriwarthan Vigneshwaran"</span>
          </h1>
          <h4 className=" md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack_Developer()
          </h4>
          <h4 className=" md:text-1xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-400">
            Undergraduate;
          </h4>
          <a href="#contact">
            <button className=" btn-primary mt-5 duration-300">
              Contact Me
            </button>
          </a>
          <div className=" mt-8 text-3xl flex items-center justify-center md:justify-start gap-3">
            {social_media?.map((icon) => (
              <div key={icon} className="text-gray-600 hover:text-white ">
                <a href={icon.link} target="blank">
                  <ion-icon name={icon.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
