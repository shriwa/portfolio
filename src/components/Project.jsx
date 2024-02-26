import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

const Project = () => {
  const projects = [
    { name: "Movie App", img: project1, github_link: "", live_link: "" },
    { name: "Job App", img: project2, github_link: "", live_link: "" },
    { name: "Tourism App", img: project3, github_link: "", live_link: "" },
    { name: "Dropdown App", img: project4, github_link: "", live_link: "" },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className=" text-center">
        <h3 className="text-4xl font-semibold">
          My <span className=" text-cyan-600">Projects</span>
        </h3>
        <p className=" text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className=" flex max-w-6xl px-5 mx-auto items-center relative">
        <div className=" lg:h-2/3 w-full">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {projects?.map((project, i) => {
              return (
                <SwiperSlide>
                  <div
                    key={i}
                    className=" h-fit w-full p-4 bg-slate-700 rounded-xl"
                  >
                    <img src={project.img} alt="" className=" rounded-xl" />
                    <h3 className=" text-xl my-4">{project.name}</h3>
                    <div className=" flex gap-3">
                      <a
                        href={project.github_link}
                        target="_blank"
                        className=" text-cyan-600 bg-gray-800 px-2 py-1 rounded inline-block"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        className=" text-cyan-600 bg-gray-800 px-2 py-1 rounded inline-block"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
