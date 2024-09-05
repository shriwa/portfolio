import React from "react";
import project1 from "../assets/images/book_store.jpg";
import project2 from "../assets/images/e_commerce.jpg";
import project3 from "../assets/images/tourism_site.jpg";
import project4 from "../assets/images/dental_app.jpg";
import project5 from "../assets/images/crud_todo.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

const Project = () => {
  const projects = [
    {
      name: "MERN Book Store",
      img: project1,
      github_link: "https://github.com/shriwa/MERN-book-store-app",
      live_link: "https://book-store-app-mern.netlify.app/",
    },
    {
      name: "MERN E-Commerce",
      img: project2,
      github_link: "https://github.com/shriwa/Mern_E-Commerce",
      live_link: "",
    },
    {
      name: "Tourism App",
      img: project3,
      github_link: "https://github.com/shriwa/Tourism-Website",
      live_link: "https://shriwa.github.io/Tourism-Website/",
    },
    {
      name: "Dental App",
      img: project4,
      github_link: "https://github.com/shriwa/Dental-Website",
      live_link: "",
    },
    {
      name: "MERN Todo App",
      img: project5,
      github_link: "https://github.com/shriwa/CRUD_TODO_App",
      live_link: "",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className=" text-center">
        <h3 className="text-4xl font-semibold">
          My <span className=" text-cyan-600">Projects</span>
        </h3>
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
            autoplay={{ delay: 7000 }}
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
                    <img
                      src={project.img}
                      alt=""
                      className=" rounded-xl w-[30rem] h-[10rem]"
                    />
                    <h3 className=" text-xl my-4">{project.name}</h3>
                    <div className=" justify-center flex gap-3">
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
