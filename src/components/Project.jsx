import React, { useEffect } from "react";
import project1 from "../assets/images/book_store.jpg";
import project2 from "../assets/images/e_commerce.jpg";
import project3 from "../assets/images/tourism_site.jpg";
import project4 from "../assets/images/dental_app.jpg";
import project5 from "../assets/images/crud_todo.jpg";
import project6 from "../assets/images/lankanaturewalks.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

import "aos/dist/aos.css";
import Aos from "aos";

const Project = () => {
  useEffect(() => {
    Aos.init();
  });
  const projects = [
    {
      name: "MERN Book Store",
      img: project1,
      //github_link: "https://github.com/shriwa/MERN-book-store-app",
      live_link: "https://book-store-app-mern.netlify.app/",
    },
    {
      name: "MERN E-Commerce",
      img: project2,
      github_link: "https://github.com/shriwa/Mern_E-Commerce",
    },
    {
      name: "Tourism App",
      img: project3,
      github_link: "https://github.com/shriwa/Tourism-Website",
      live_link: "https://shriwa.github.io/Tourism-Website/",
    },
    {
      name: "Lanka Nature Walks",
      img: project6,
      live_link: "https://www.lankanaturewalks.com",
    },
    // {
    //   name: "Dental App",
    //   img: project4,
    //   github_link: "https://github.com/shriwa/Dental-Website",
    // },
    // {
    //   name: "MERN Todo App",
    //   img: project5,
    //   github_link: "https://github.com/shriwa/CRUD_TODO_App",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-10 text-white"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:h-2/3 w-full">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 7000 }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {projects?.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-12">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-xl w-[30rem] h-[10rem] object-cover"
                  />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="justify-center flex gap-3">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 rounded inline-block"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 rounded inline-block"
                      >
                        View
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
