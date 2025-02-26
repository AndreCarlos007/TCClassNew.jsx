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
    { link: "Sobre", path: "/" },
    { link: "Tcc-ia", path: "/" },
    { link: "Tcc-prof", path: "/" },
    { link: "Feedback", path: "/" },
    { link: "Contatos", path: "/" },
  ];

  return (
    <>
      <nav className="shadow-md  mb-2 py-6 bg-bgColorGray  fixed top-0 right-0 left-0 z-[100]">
        <div className="flex mx-[2.125rem] justify-between ">
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
                <Link href={path} key={link} className="block cursor-pointer">
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 ">
            <div className="cursor-pointer">
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
        className={`mt-[4rem] bg-bgColorDarkBlue z-[100] py-2 ${
          isMenuAberto ? "flex flex-col fixed top-4  right-0 left-0" : "hidden"
        }`}
      >
        {itemNavBar.map(({ link, path }) => (
          <Link
            href={path}
            onClick={toggleMenu}
            key={link}
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
