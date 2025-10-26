import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  });
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] bg-white/80 ${
        sticky ? "bg-white/80 text-gray-900 duration-500" : "text-black"
      }`}
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="flex items-center justify-between ">
        <div className="mx-7">
          <h4 className="text-3xl uppercase font-bold text-cyan-800 lg:text-4xl">
            Shriwarthan
          </h4>
        </div>
        <div
          className={` ${sticky ? `md:bg-white/0 bg-white` : `bg-white`} 
            text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => {
              return (
                <li key={i} className=" px-6 hover:text-cyan-600">
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] cursor-pointer ${
            open ? "text-gray-900" : " text-gray-900"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-1.5/3 h-screen px-7 font-bold bg-white/90 top-0 right-0 duration-500 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => {
              return (
                <li
                  onClick={() => setOpen(false)}
                  key={i}
                  className=" px-6 hover:text-cyan-600"
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
