"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";



const Navbar = () => {
  const [isMenuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!isMenuAberto);
  };

  // Itens da navbar
  const itemNavBar = [
    { link: "Home", path: "#section1" },
    { link: "Sobre", path: "#section2" },
    { link: "Tcc-ia", path: "#section3" },
    { link: "Tcc-prof", path: "#section4" },
    { link: "Feedback", path: "#section5" },
    { link: "Contatos", path: "#section6" },
  ];

  // Função para scroll suave
  const handleNavClick = (targetId) => {
    const offSet = 50;

    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - offSet,
      behavior: 'smooth',
    });


  };

  const tl = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.set("#menu-link-item-holder", { y: 75});

      tl.current = gsap.timeline({paused: true}).to("#menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to("#menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
    }, 
    {scope: container})

    useEffect(() => {
      if (isMenuAberto) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }, [isMenuAberto])

  return (
    <>
      <nav className=" mb-2 py-1 fixed top-0 right-0 left-0 z-[100]" ref={container}>
        <div className="flex mx-[2.125rem] md:mx-[6rem] justify-between items-center" >
          <button onClick={() => handleNavClick("#section1")} className="h-16 font-Saans_Trial font-bold">
            TCCLASS
          </button>
          <div className="md:flex">
            {/* Links de navegação no desktop */}
            <ul className="hidden  md:gap-10 font-Space_Grotesk">
              {itemNavBar.map(({ link, path }) => (
                <li key={link}>
                  <button onClick={() => handleNavClick(path)} className="block cursor-pointer">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 ">
            <div className="cursor-pointer">
              <Image src="/Perfil.AVIF" alt="Perfil do user" width={30} height={30} />
            </div>

            {/* Ícones de abrir/fechar menu para mobile */}
            <div className="">
              <button onClick={toggleMenu} className="">
                {isMenuAberto ? <MdOutlineClose className="text-3xl" /> : <HiMenu className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Itens da Navbar para mobile */}
      <div
      id="menu-overlay" 
  className={`mt-[3.5rem] bg-bgColorDarkBlue z-[100] py-2 ${isMenuAberto ? "flex flex-col fixed h-screen  top-4 right-0 left-0" : "hidden"}`}
>
  <div className="flex flex-col justify-between h-full">
    {/* Seção de navegação com os botões */}
    <div id="menu-link-item-holder" 
    className="flex flex-col">
      {itemNavBar.map(({ link, path }) => (
        <button
          onClick={() => { handleNavClick(path), toggleMenu() }}
          key={link}
          className="text-[4rem] font-Saans_Trial flex mx-[6rem] uppercase leading-none text-colorWhite"
          
        >
          {link}
        </button>
      ))}
    </div>

    {/* Seção de Links */}
    <div className="mx-[6rem] mb-20 flex gap-[25rem] text-colorWhite ">
      <div className="flex flex-col font-Saans_Trial">
      <Link href="/">X &#8599;</Link>
      <Link href="/">LINKEDIN &#8599;</Link>
      <Link href="/">GITHUB &#8599;</Link>
      <Link href="/">PORTFÓLIO &#8599;</Link>
      </div>

      <div className="flex flex-col uppercase font-Saans_Trial items-start justify-end">
        <p>andrecarlos.oc@gmail.com</p>
        <p>andré carlos oliveira</p>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Navbar;
