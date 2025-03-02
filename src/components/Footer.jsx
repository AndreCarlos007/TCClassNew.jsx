"use client"
import Image from "next/image";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {

  const handleNavClick = (targetId) => {
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#edf0f2] shadow-2xl">
      <div className="pt-2">
        <div className="flex flex-col ">
          <div className="mt-2 pb-2 mx-[2.125rem] lg:mx-[6rem] max-w-[100vw]">
            <div className="flex flex-col gap-5 ">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-Saans_Trial font-bold">TCCLASS</p>
                <span className="text-colorTextPrimary  font-Space_Grotesk text-xs">
                Desenvolvido por André Carlos
                </span>
                <div className="border-b border-colorTextPrimary w-[50vw]"></div>
                </div>
                <button onClick={() => handleNavClick("#section1")}>
                  <FaArrowAltCircleUp className="text-[2.5rem] text-colorTextPrimary" />
                </button>
              </div>
              <div>
                <span className="font-Saans_Trial text-colorTextPrimary">
                © 2025 · TCClass
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
