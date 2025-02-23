"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => {
    setMenuAberto(!isMenuAberto);
  };
  const itemNavBar = [
    { link: "Home", path: "/" },
    { link: "Sobre", path: "sobre" },
    { link: "Tcc-ia", path: "tccia" },
    { link: "Tcc-prof", path: "tccprof" },
    { link: "Feedback", path: "feedback" },
    { link: "Contatos", path: "contato" },
  ];

  return (
    <>
      <nav className="shadow-md my-2 py-4  fixed top-0 right-0 left-0 ">
        <div className="flex  mx-[2.125rem] justify-between ">
          <Link href="/">
            <Image
              className="inline-block items-center "
              src="/Logo.AVIF"
              alt="Logo"
              width={145}
              height={30}
            />
          </Link>
          <div className="md:flex">
            {/* Aqui eu mostro a nsvItems usando .map */}
            <ul className="hidden md:flex md:gap-10 font-Space_Grotesk">
              {itemNavBar.map(({ link, path }) => (
                <Link href={path} key={path} className="block cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 ">
            <div className="">
              <Image
                src="/Perfil.AVIF"
                alt="Perfil do user"
                width={30}
                height={30}
              />
            </div>

            {/* OnClick das imagens do react-icons - Abrir Menu - Fechar Menu */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="">
                {isMenuAberto ? (
                  <MdOutlineClose className="text-3xl" />
                ) : (
                  <HiMenu className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Itens da Navbar pro mobile */}
      <div
        className={`mt-[3.4rem] bg-bgColorDarkBlue py-2 ${
          isMenuAberto ? "flex flex-col fixed top-4  right-0 left-0" : "hidden"
        }`}
      >
        {itemNavBar.map(({ link, path }) => (
          <Link
            href={path}
            onClick={toggleMenu}
            key={path}
            className="py-3 font-Space_Grotesk flex justify-center text-colorWhite "
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
