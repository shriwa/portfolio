import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Bot = () => {
  return (
    <div className="fixed bottom-5 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-14 h-14 flex items-center justify-center rounded-full animate-bounce">
      <a href="https://wa.me/+94767722381" target="blank">
        <FaWhatsapp className="text-[42px]" />
      </a>
    </div>
  );
};

export default Bot;
